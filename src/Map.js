import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";
import Mapbox, { Images, ShapeSource, SymbolLayer } from "@rnmapbox/maps";
import { mapIcons } from "../components/Pins.js";
import { featureCollection, feature, point } from "@turf/helpers";

Mapbox.setAccessToken(
  "sk.eyJ1IjoiZGppbnBhcmsxIiwiYSI6ImNsczc5amF0bzFxcGcybGw4eDdtanAwajgifQ.xMLaVK6pM389orTVSH9oDw"
);

function Map() {
  const mapRef = useRef(null);
  const cameraRef = useRef(null);
  const stateFeatureCollection = featureCollection([point([-114.05, 51.05])]);

  return (
    <View ref={mapRef} style={styles.page}>
      <View style={styles.container}>
        <Mapbox.MapView style={styles.map}>
          <Mapbox.UserLocation visible={false} onPress={() => null} />
          <Mapbox.Camera
            ref={cameraRef}
            zoomLevel={12}
            animationMode="flyTo"
            animationDuration={0}
            centerCoordinate={[-114.05, 51.05]}
          />
          <ShapeSource
            id="symbolLocationSource"
            hitbox={{ width: 20, height: 20 }}
            // onPress={(e) => onSourceLayerPress(e)}
            shape={stateFeatureCollection}
          >
            <SymbolLayer
              id="symbolLocationSymbols"
              minZoomLevel={1}
              style={styles.icon}
            />
            <Images images={{ icon: mapIcons.icon }} />
          </ShapeSource>
        </Mapbox.MapView>
      </View>
    </View>
  );
}

export default Map;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: "100%",
    width: "100%",
  },
  map: {
    flex: 1,
  },
  icon: {
    iconImage: "icon",
    iconAllowOverlap: true,
  },
});
