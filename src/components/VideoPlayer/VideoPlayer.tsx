import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import { Grid, Typography, Select, MenuItem } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    videoContainer: {
      position: 'relative',
      border: '1px solid #757575',
    },
    targetOverlay: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '70%',
      height: '40%',
      transform: 'translate(-50%, -50%)',
      border: '2px dashed #90caf9',
      borderRadius: 5,
      pointerEvents: 'none',
    },
  }),
);

interface VideoPlayerProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  selectedDeviceId: string;
  handleDeviceChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
  videoInputDevices: MediaDeviceInfo[];
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoRef,
  selectedDeviceId,
  handleDeviceChange,
  videoInputDevices,
}) => {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} className={classes.videoContainer}>
        <video ref={videoRef} width="100%" height="100%" autoPlay playsInline />
        <div className={classes.targetOverlay} />
      </Grid>
      {videoInputDevices.length > 1 && (
        <Grid item xs={12}>
          <Typography variant="subtitle1">Change video source:</Typography>
          <Select
            value={selectedDeviceId}
            onChange={handleDeviceChange}
            style={{ maxWidth: '400px' }}
          >
            {videoInputDevices.map((device) => (
              <MenuItem key={device.deviceId} value={device.deviceId}>
                {device.label}
              </MenuItem>
            ))}
          </Select>
        </Grid>
      )}
    </>
  );
};

export default VideoPlayer;
