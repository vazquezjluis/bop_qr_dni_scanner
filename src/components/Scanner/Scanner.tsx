import React, { useState, useRef, useEffect } from 'react';
import {
  BrowserMultiFormatReader,
  DecodeHintType,
} from '@zxing/library';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import ScanResult, { ScanResultType } from '../ScanResult/ScanResult';
import { Button, Grid } from '@material-ui/core';



const Scanner: React.FC = () => {
  const [selectedDeviceId, setSelectedDeviceId] = useState<string>('');
  const [videoInputDevices, setVideoInputDevices] = useState<MediaDeviceInfo[]>([]);
  const [scanResult, setScanResult] = useState<ScanResultType | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const hints = new Map();
  hints.set(DecodeHintType.ASSUME_GS1, true);
  hints.set(DecodeHintType.TRY_HARDER, true);
  const codeReader = new BrowserMultiFormatReader(hints);

  useEffect(() => {
    codeReader.getVideoInputDevices().then((devices) => {
      setSelectedDeviceId(devices[0].deviceId);
      setVideoInputDevices(devices);
    });

    return () => {
      codeReader.reset();
    };
  }, [codeReader]);

  const startScan = () => {
    if (videoRef.current) {
      codeReader.decodeFromVideoDevice(selectedDeviceId, videoRef.current, (result, err) => {
        if (result) {
          const textResult = result.getText();
          const [
            codigo,
            apellido,
            nombre,
            sexo,
            documento,
            ejemplar,
            fechaNacimiento,
            fechaEmision,
          ] = textResult.split('@');
          setScanResult({
            codigo,
            apellido,
            nombre,
            sexo,
            documento,
            ejemplar,
            fechaNacimiento,
            fechaEmision,
          });
          codeReader.reset();
        }
        if (err) {
          console.error(err);
        }
      });
      console.log(`Started continuous decode from camera with id ${selectedDeviceId}`);
    }
  };

  const resetScan = () => {
    codeReader.reset();
    setScanResult(null);
    console.log('Reset.');
  };

  const handleDeviceChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedDeviceId(event.target.value as string);
  };

  return (
    <>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={startScan}>
          Iniciar escaneo
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={resetScan}
          style={{ marginLeft: '1em' }}
        >
          Reiniciar
        </Button>
      </Grid>
      <VideoPlayer
        videoRef={videoRef}
        selectedDeviceId={selectedDeviceId}
        handleDeviceChange={handleDeviceChange}
        videoInputDevices={videoInputDevices}
      />
      {scanResult && <ScanResult scanResult={scanResult} />}
    </>
  );
};

export default Scanner;
