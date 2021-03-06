import AudioDropzone from './audioDropzone';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const RenderTrackField = props => {
  const {
    audioUploadProgress,
    hasAudio,
    index,
    input,
    isEncoding,
    isTranscoding,
    isUploading,
    label,
    meta: { touched, error },
    name,
    trackId,
    type
  } = props;
  const inputClasses = classNames('form-control', {
    invalid: touched && error
  });

  return (
    <>
      <div className="d-flex align-items-center">
        <label htmlFor={name}>{label}</label>
        <input
          className={inputClasses}
          id={name}
          name="trackTitle"
          placeholder={`Track ${label} Title`}
          required
          type={type}
          {...input}
        />
        <AudioDropzone
          hasAudio={hasAudio}
          isEncoding={isEncoding}
          isTranscoding={isTranscoding}
          isUploading={isUploading}
          audioUploadProgress={audioUploadProgress}
          disablePreview
          onDrop={(accepted, rejected) =>
            props.onDropAudio(accepted, rejected, index, trackId)
          }
        />
      </div>
      {error && <div className="invalid-feedback">{touched && error}</div>}
    </>
  );
};

RenderTrackField.propTypes = {
  audioUploadProgress: PropTypes.number,
  hasAudio: PropTypes.bool,
  index: PropTypes.number,
  input: PropTypes.object,
  isEncoding: PropTypes.bool,
  isTranscoding: PropTypes.bool,
  isUploading: PropTypes.bool,
  label: PropTypes.number,
  meta: PropTypes.object,
  onDropAudio: PropTypes.func,
  touched: PropTypes.bool,
  error: PropTypes.bool,
  name: PropTypes.string,
  trackId: PropTypes.string,
  type: PropTypes.string
};

export default RenderTrackField;
