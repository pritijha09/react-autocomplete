import React from "react";
const google = window.google;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }

  componentDidMount() {
    //let self = this;
    var script = document.createElement("script");
    script.async = "async";
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBpGTbvpqP9sKEC9oCYEQAVQeVxygn0hNg&libraries=places`;
    script.onload = function() {
      // alert("script is loaded");
    };
    document.getElementsByTagName("head")[0].appendChild(script);
    this.autocomplete = new google.maps.places.Autocomplete(
      this.autocompleteInput.current,
      { types: ["geocode"] }
    );
    this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
  }

  handlePlaceChanged() {
    const place = this.autocomplete.getPlace();
    this.props.onPlaceLoaded(place);
  }

  render() {
    return (
      <input
        ref={this.autocompleteInput}
        id="autocomplete"
        placeholder="Enter your address"
        type="text"
      />
    );
  }
}
export default SearchBar;
