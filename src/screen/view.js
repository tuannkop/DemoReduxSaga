import React from "react";
import { View, TouchableOpacity, Text, FlatList, ActivityIndicator } from "react-native";
import styles from "./styles";

class MyScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  callAPI() {
    this.props.onCallAPI();
  }

  renderRow(item) {
    return (
      <View style={{marginTop: 10}}>
          <Text style={{ fontWeight: "bold"}}>{item.id}</Text>
          <Text>{item.title}</Text>
          <View style={{ height: 1, marginLeft: 0, marignRight: 0, backgroundColor: "black"}}/>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.rootView}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => this.callAPI()}
        >
          <Text style={styles.textButton}>CALL API</Text>
        </TouchableOpacity>
        {this.props.loading ? <ActivityIndicator 
                                size="large"
                                color="#0000ff"
                                style={{ marginTop: 300, alignSelf: "center", position: "absolute"}}/> 
                            : null}
        <FlatList
          style={{ marginTop: 20 }}
          data={this.props.success}
          renderItem={({item}) => this.renderRow(item)}
        />
      </View>
    );
  }
}

export default MyScreen;
