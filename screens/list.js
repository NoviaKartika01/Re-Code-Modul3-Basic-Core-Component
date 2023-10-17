import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const datas = [
    {
        id: 1,
        title:
          "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
        image:
          "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
      },
      {
        id: 2,
        title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
        image:
          "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
      },
      {
        id: 3,
        title:
          "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
        image:
          "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
      },
      {
        id: 4,
        title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
        image:
          "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
      },
      {
        id: 5,
        title:
          "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
        image:
          "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
      },
      {
        id: 6,
        title:
          "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
        image:
          "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
      },
      {
        id: 7,
        title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
        image:
          "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
      },
      {
        id: 8,
        title:
          "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
        image:
          "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
      },
      {
        id: 9,
        title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
        image:
          "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
      },
      {
        id: 10,
        title:
          "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
        image:
          "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
      },
];

// function component
const List = () => {

  // arrow function eitd destructuring argumen
  const renderItem = ({ item }) => {
    return (
    // untuk alert
    <TouchableOpacity  style={styles.view} onPress={() => alert("Pressed")}>
      <View>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.text} > {item.title} </Text>
      </View>
    </TouchableOpacity>
    );
  };


  return (
    
    <FlatList 
    data={datas}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
    />
  );
};

// style
const styles = StyleSheet.create({
  view: {
    padding: 15,
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
  },
  image: {
    height: 200,
    width: null,
  },
  text: {
    fontSize: 18,
    paddingTop: 10,
  },
  
});
export default List;



// // penggunaan modal
// import React, { useState } from "react";
// import { FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// const datas = [
//     {
//         id: 1,
//         title:
//           "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
//         image:
//           "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
//       },
//       {
//         id: 2,
//         title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
//         image:
//           "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
//       },
//       {
//         id: 3,
//         title:
//           "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
//         image:
//           "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
//       },
//       {
//         id: 4,
//         title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
//         image:
//           "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
//       },
//       {
//         id: 5,
//         title:
//           "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
//         image:
//           "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
//       },
//       {
//         id: 6,
//         title:
//           "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
//         image:
//           "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
//       },
//       {
//         id: 7,
//         title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
//         image:
//           "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
//       },
//       {
//         id: 8,
//         title:
//           "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
//         image:
//           "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
//       },
//       {
//         id: 9,
//         title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
//         image:
//           "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
//       },
//       {
//         id: 10,
//         title:
//           "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
//         image:
//           "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
//       },
// ];

// // function component
// const List = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);

//   const openModal = (item) => {
//       setSelectedItem(item);
//       setModalVisible(true);
//   };

//   // arrow function eitd destructuring argumen
//   const renderItem = ({ item }) => {
//     return (
//       <View>
        


//         <View>
//           {/* untuk modal */}
//           <TouchableOpacity style={styles.view} onPress={() => openModal(item)}>
//                 <View>
//                     <Image source={{ uri: item.image }} style={styles.image} />
//                     <Text style={styles.text}> {item.title} </Text>
//                 </View>
//             </TouchableOpacity>
//         </View>
       

      
//       </View>
      
//     );
//   };


//   return (
//     // lebih dari satu harus dibungkus view
//     <View>
//       <FlatList 
//       data={datas}
//       renderItem={renderItem}
//       keyExtractor={(item) => item.id}
//       /> 


// <Modal
//   animationType="slide"
//   transparent={true}
//   visible={modalVisible}
//   onRequestClose={() => {
//     setModalVisible(false);
//   }}
// >
//   <View style={styles.modalContent}>
//     {selectedItem ? (
//       <>
//       <Text style={styles.modalText} >Ini artikel {selectedItem.id} </Text>
//         <Image source={{ uri: selectedItem.image }} style={styles.modalImage} />
//         <Text style={styles.modalText}>{selectedItem.title}</Text>
//       </>
//     ) : null }

//     <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
//       <Text style={styles.closeButtonText}>Close</Text>
//     </TouchableOpacity>
//   </View>
// </Modal>
//     </View>
    
//   );
// };

// // style
// const styles = StyleSheet.create({
//   view: {
//     padding: 15,
//     borderBottomColor: "#dddddd",
//     borderBottomWidth: 1,
//   },
//   image: {
//     height: 200,
//     width: null,
//   },
//   text: {
//     fontSize: 18,
//     paddingTop: 10,
//   },

//   modalContent: {
//     margin: 30,
//     backgroundColor: 'brown',
//     borderRadius: 25,
//     padding: 40,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     // flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
  
    
//   },
//   modalImage: {
//     height: 200,
//     width: 250,
//   },
//   modalText: {
//     fontSize: 18,
//     paddingTop: 10,
//     paddingBottom: 20,
//     color: 'white',
//   },
//   closeButton: {
//     backgroundColor: "#fff",
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 20,
//     alignItems: 'flex-end',
//   },
//   closeButtonText: {
//     color: "black",
//     fontSize: 16,
//     textAlign: "center",
//   },
  
// });
// export default List;