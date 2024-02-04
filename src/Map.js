import React, { useRef, useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Mapbox, { Images, ShapeSource, SymbolLayer } from "@rnmapbox/maps";
import { mapIcons } from "../components/Pins.js";
import { featureCollection, feature, point } from "@turf/helpers";
import { Icon } from "@rneui/themed";
import Button from "../components/Button.js";

Mapbox.setAccessToken(
  "sk.eyJ1IjoiZGppbnBhcmsxIiwiYSI6ImNsczc5amF0bzFxcGcybGw4eDdtanAwajgifQ.xMLaVK6pM389orTVSH9oDw"
);

function Map() {
  const mapRef = useRef(null);
  const cameraRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const stateFeatureCollection = featureCollection([point([-114.05, 51.05])]);
  const openModal = (e) => {
    setModalVisible(true);
  };
  const closeModal = (e) => {
    setModalVisible(false);
  };
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
            onPress={(e) => openModal(e)}
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
        {modalVisible && (
          <View style={[styles.modalContainer]}>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <TouchableOpacity style={styles.buttonClose} onPress={closeModal}>
                <Text style={{ color: "white" }}>X</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "columm" }}>
              <Image source={require("../assets/image.png")} />
              <Text
                style={{
                  fontWeight: "bold",
                  marginHorizontal: 24,
                  marginVertical: 16,
                  color: "#3F49A4",
                  fontSize: 15,
                }}
              >
                Alberta Association of Immigrant Serving Agencies
              </Text>
              <View
                style={{
                  marginHorizontal: 24,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={{ marginRight: 8 }}>5.0</Text>
                <Icon
                  name={"star"}
                  type={"materialIcon"}
                  color={"#FFCC4B"}
                  size={14}
                />
                <Icon
                  name={"star"}
                  type={"materialIcon"}
                  color={"#FFCC4B"}
                  size={14}
                />
                <Icon
                  name={"star"}
                  type={"materialIcon"}
                  color={"#FFCC4B"}
                  size={14}
                />
                <Icon
                  name={"star"}
                  type={"materialIcon"}
                  color={"#FFCC4B"}
                  size={14}
                />
                <Icon
                  name={"star"}
                  type={"materialIcon"}
                  color={"#FFCC4B"}
                  size={14}
                />
              </View>
              <Text
                style={{ color: "#B2B2B2", marginTop: 8, marginHorizontal: 24 }}
              >
                Non-profit organization
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 24,
                }}
              >
                <Button
                  name="Directions"
                  icon="directions"
                  backgroundColor="#1a73e8"
                  borderColor="#1a73e8"
                />
                <Button
                  name="Save"
                  icon="save"
                  backgroundColor="#1a73e8"
                  borderColor="#1a73e8"
                />
                <Button
                  name="Nearby"
                  icon="map"
                  backgroundColor="#1a73e8"
                  borderColor="#1a73e8"
                />
                <Button
                  name="Share"
                  icon="share"
                  backgroundColor="#1a73e8"
                  borderColor="#1a73e8"
                />
              </View>
              <View style={{ marginTop: 20, marginHorizontal: 24 }}>
                <Text>903 8 Ave. SW, Calgary, AB T2P 0P7</Text>
                <Text>Closed - Opens 9am Mon</Text>
                <Text>aaisa.ca</Text>
                <Text>(403) 273-2962</Text>
                <Text>2WW9+88 Calgary, Alberta</Text>
                <Text>Sed to your phone</Text>
              </View>
            </View>
          </View>
        )}
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
  modalContainer: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
    top: 150,
    bottom: 50,
    right: 46,
    left: 40,
  },
  modalContent: {
    width: 200, // Adjust the width as needed
    height: 150, // Adjust the height as needed
  },
  buttonClose: {
    height: 24,
    width: 24,
    marginTop: 8,
    marginRight: 8,
    backgroundColor: "#FFCC4B",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
