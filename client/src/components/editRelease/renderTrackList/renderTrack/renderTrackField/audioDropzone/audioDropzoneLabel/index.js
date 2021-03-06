import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

const AudioDropzoneLabel = props => {
  const {
    hasAudio,
    isDragActive,
    isDragReject,
    isEncoding,
    isTranscoding,
    isUploading,
    audioUploadProgress
  } = props;

  if (isDragReject && !isUploading) {
    return (
      <>
        <FontAwesome name="times-circle" className="mr-2" />
        File not accepted!
      </>
    );
  }

  if (isDragActive && !isUploading) {
    return (
      <>
        <FontAwesome name="thumbs-o-up" className="mr-2" />
        Drop it in!
      </>
    );
  }

  if (isUploading) {
    return (
      <>
        <FontAwesome name="cog" spin className="mr-2" />
        {audioUploadProgress.toString(10).padStart(2, '0')}%
      </>
    );
  }

  if (isEncoding) {
    return (
      <>
        <FontAwesome name="cog" spin className="mr-2" />
        Encoding
      </>
    );
  }

  if (isTranscoding) {
    return (
      <>
        <FontAwesome name="cog" spin className="mr-2" />
        Transcoding
      </>
    );
  }

  if (hasAudio) {
    return (
      <>
        <FontAwesome name="refresh" className="mr-2" />
        Replace Audio
      </>
    );
  }

  return (
    <>
      <FontAwesome name="plus-circle" className="mr-2" />
      Add Audio
    </>
  );
};

AudioDropzoneLabel.propTypes = {
  hasAudio: PropTypes.bool,
  isDragActive: PropTypes.bool,
  isDragReject: PropTypes.bool,
  isEncoding: PropTypes.bool,
  isTranscoding: PropTypes.bool,
  isUploading: PropTypes.bool,
  audioUploadProgress: PropTypes.number
};

export default AudioDropzoneLabel;
