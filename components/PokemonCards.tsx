import React from "react";
import { View, Text, StyleSheet, Platform, Image, ImageSourcePropType } from "react-native";

type PokemonProps = {
  name: string;
  image: ImageSourcePropType;
  type: string;
  hp: number;
  moves: string[];
  weakness: string[];
};

export default function PokemonCards({ name, image, type, hp, moves, weakness }: PokemonProps) {
  const getTypeDetails = (type: string) => {
    switch (type.toLowerCase()) {
      case "electric":
        return { borderColor: "#FFD700", emoji: "⚡" };
      case "water":
        return { borderColor: "#6493EA", emoji: "💧" };
      case "fire":
        return { borderColor: "#ff5733", emoji: "🔥" };
      case "grass":
        return { borderColor: "#A0A0A0", emoji: "🍇" };
      default:
        return { borderColor: "#000", emoji: "❓" }; // Default case
    }
  };

  const { borderColor, emoji } = getTypeDetails(type);

  return (
    <View style={styles.card}>
      <View style={styles.nameContent}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️{hp}</Text>
      </View>
      <View>
        <Image style={styles.image} source={image} resizeMode="contain" />
      </View>
      <View style={styles.typeCont}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>
      <View style={styles.movesCont}>
        <Text style={styles.movesText}>Moves: {moves.join(", ")}</Text>
        
      </View>
      <View style={styles.weakCont}>
        <Text style={styles.weakText}>Weakness: {weakness.join(", ")}</Text>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowOpacity: 1,
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  nameContent: {
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  hp: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 16,
    marginBottom: 16,
  },
  typeCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    alignContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#000',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  typeEmoji: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 8,
  },
  typeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  movesCont:{
    marginBottom: 16,
    alignContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#000',
  },
  movesText:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  weakCont:{
   marginBottom:8
  },
  weakText:{
    fontSize:22,
    fontWeight: 'bold',
    color: '#000',
  }

});
