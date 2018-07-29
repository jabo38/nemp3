import React, { Component, Fragment } from 'react';
import FontAwesome from 'react-fontawesome';
import RenderTrack from './RenderTrack';

class RenderTrackList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dragOrigin: null,
      dragActive: false,
      isAddingTrack: false
    };
  }

  handleConfirm = (title, callback) => {
    const confirmation = window.confirm(
      `Are you sure you want to delete ${(title && `'${title}'`) ||
        'this track'}?`
    );
    if (confirmation) callback(true);
    else callback(false);
  };

  handleAddTrack = push => {
    this.setState({ isAddingTrack: true });
    this.props.addTrack(this.props.release._id, () => {
      this.setState({ isAddingTrack: false }, () => push());
    });
  };

  handleDragStart = index => {
    this.setState({ dragOrigin: index });
  };

  handleDragEnter = index => {
    this.setState({ dragActive: index });
  };

  handleDragOver = () => {};

  handleDragLeave = () => {};

  handleDrop = (fieldsMove, indexTo) => {
    const releaseId = this.props.release._id;
    const indexFrom = this.state.dragOrigin;
    this.props.moveTrack(releaseId, indexFrom, indexTo, () => {
      fieldsMove(indexFrom, indexTo);
    });
  };

  handleDragEnd = () => {
    this.setState({ dragOrigin: null, dragActive: false });
  };

  render() {
    const { isAddingTrack } = this.state;
    const { fields, release } = this.props;

    return (
      <Fragment>
        <ul className="list-group track-list">
          {fields.map((track, index) => (
            <RenderTrack
              audioUploading={this.props.audioUploading}
              deleteTrack={this.props.deleteTrack}
              dragActive={this.state.dragActive}
              dragOrigin={this.state.dragOrigin}
              fields={fields}
              handleConfirm={this.handleConfirm}
              handleDragStart={this.handleDragStart}
              handleDragEnter={this.handleDragEnter}
              handleDragOver={this.handleDragOver}
              handleDragLeave={this.handleDragLeave}
              handleDrop={this.handleDrop}
              handleDragEnd={this.handleDragEnd}
              isTranscoding={this.props.isTranscoding}
              index={index}
              key={`${track}._id`}
              moveTrack={this.props.moveTrack}
              onDropAudio={this.props.onDropAudio}
              release={release}
              toastSuccess={this.props.toastSuccess}
              track={track}
            />
          ))}
        </ul>
        <button
          className="btn btn-outline-primary btn-sm add-track"
          disabled={isAddingTrack}
          onClick={() => this.handleAddTrack(fields.push)}
          title="Add Track"
          type="button"
        >
          {isAddingTrack ? (
            <FontAwesome name="circle-o-notch" spin className="mr-2" />
          ) : (
            <FontAwesome name="plus-circle" className="mr-2" />
          )}
          {isAddingTrack ? 'Adding…' : 'Add'}
        </button>
      </Fragment>
    );
  }
}

export default RenderTrackList;
