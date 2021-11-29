import React from "react";
import { Dimensions, FlatList, View } from "react-native";
import SlateTile from "./SlateTile";

const SlateDistributor = ({ slateRows, onTilePressed, tiles }) => {
  const widthX = (Dimensions.get("screen").width / slateRows) * 0.98;
  const heightY = (Dimensions.get("screen").height / slateRows) * 0.5;

  return (
    <FlatList
      data={tiles}
      renderItem={(item) => (
        <View style={{ width: widthX, height: heightY }}>
          <SlateTile slateNumber={item.item} onTilePressed={onTilePressed} />
        </View>
      )}
      key={slateRows}
      numColumns={slateRows}
      keyExtractor={(item, index) => index}
    />
  );
};

export default SlateDistributor;
