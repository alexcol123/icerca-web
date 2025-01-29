// "use client";

// import {
//   GoogleMap,
//   useJsApiLoader,
//   Marker,
//   InfoWindow,
// } from "@react-google-maps/api";
// import Image from "next/image";
// import { useState, useCallback, useEffect } from "react";

// const coordinates = [
//   { id: 1, lat: 40.756217895482614, lng: -73.98645804898442 },
//   { id: 2, lat: 40.73962086722483, lng: -73.9927000323536 },
//   { id: 3, lat: 40.706861026861404, lng: -74.01265958780125 },
// ];

// const mapConfig = {
//   containerStyle: {
//     width: "100%",
//     height: "90vh",
//   },
//   defaultZoom: 15,
//   options: {
//     disableDefaultUI: false,
//     zoomControl: true,
//     // mapTypeControl: true,  // remove mapTypeControl
//     scaleControl: true,
//     streetViewControl: true,
//     rotateControl: true,
//     fullscreenControl: false,
//     clickableIcons: false,
//     scrollWheel: true,

//     panControl: true,
//     mapId: process.env.NEXT_PUBLIC_GOOGLE_MAP_ID!,
//   },
// };

// const pinIcon = {
//   //   url: "/images/policeman.png",
//   url: "/images/police-car.png" as string,
//   scaledSize: { width: 50, height: 50 },
// };

// export default function Maps() {
//   const { isLoaded, loadError } = useJsApiLoader({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
//     libraries: ["places"],
//   });

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [map, setMap] = useState(null);
//   const [isInfoWindowOpen, setisInfoWindowOpen] = useState(false);

//   const currentLocation = coordinates[currentIndex];

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % coordinates.length);
//   };

//   const onLoad = useCallback((map) => {
//     setMap(map);
//   }, []);

//   const onUnmount = useCallback(() => {
//     setMap(null);
//   }, []);

//   useEffect(() => {
//     const handleKeyPress = (e) => {
//       if (e.key === "ArrowRight") handleNext();
//     };
//     window.addEventListener("keydown", handleKeyPress);
//     return () => window.removeEventListener("keydown", handleKeyPress);
//   }, []);

//   if (loadError)
//     return (
//       <div className="h-screen flex items-center justify-center">
//         <p className="text-red-500">Failed to load Google Maps</p>
//       </div>
//     );

//   if (!isLoaded)
//     return (
//       <div className="h-screen flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
//       </div>
//     );

//   const MarkerClicked = (e) => {
//     console.log("Marker clicked");
//     console.log(e.latLng.lat(), e.latLng.lng());
//     setisInfoWindowOpen(true);
//   };

//   const MarkerFinishedDrag = (e) => {
//     console.log("Marker finished drag");
//     console.log(e.latLng.lat(), e.latLng.lng());
//   };

//   return (
//     <div className="relative">
//       <GoogleMap
//         mapContainerStyle={mapConfig.containerStyle}
//         center={currentLocation}
//         zoom={mapConfig.defaultZoom}
//         onLoad={onLoad}
//         onUnmount={onUnmount}
//         options={mapConfig.options}
//         onClick={() => setisInfoWindowOpen(false)}
//       >
//         <Marker
//           position={currentLocation}
//           icon={pinIcon}
//           visible={true}
//           //   draggable={true}
//           onClick={MarkerClicked}
//           //   onDragEnd={MarkerFinishedDrag}
//           label={{
//             text: `Ver Mas`,
//             color: "white",
//             className:
//               " bg-red-700/90 text-white p-2 rounded font-semi-bold mb-80",
//           }}
//           //  animation={google.maps.Animation.BOUNCE}
//         >
//           {isInfoWindowOpen && (
//             <InfoWindow
//               position={currentLocation}
//               onCloseClick={() => setisInfoWindowOpen(false)}
//             >
//               <div className="w-[280px] bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
//                 <div className="relative p-3">
//                   <Image
//                     src="/images/ice-stop.jpg"
//                     alt="Location"
//                     width={280}
//                     height={180}
//                     className="object-cover rounded-lg shadow-md"
//                     sizes="280px"
//                   />
//                 </div>
//                 <div className="px-5 py-4">
//                   <div className="flex items-center justify-between mb-3">
//                     <h3 className="text-lg font-bold text-gray-800">
//                       🚨 Posible Redada ICE
//                     </h3>
//                     <span className="text-xs bg-red-50 text-red-600 px-2 py-1 rounded-full">
//                       Activo
//                     </span>
//                   </div>
//                   <p className="text-gray-600 text-base  leading-relaxed font-semibold">
//                     Cerca de Times square St. y 7th Ave, New York
//                   </p>
//                   <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
//                     <span>14 Feb 2025</span>
//                     <span>11:30 AM</span>
//                   </div>
//                 </div>
//               </div>
//             </InfoWindow>
//           )}
//         </Marker>
//       </GoogleMap>

//       <div className="absolute top-4 right-8 bg-white p-2 rounded-md shadow text-black">
//         Location {currentIndex + 1} of {coordinates.length}
//       </div>

//       <button
//         onClick={handleNext}
//         className="absolute bottom-4 right-4 bg-blue-500 text-white px-6 py-3 rounded-lg
//                  shadow-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
//       >
//         Next
//         <svg
//           className="w-4 h-4"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M9 5l7 7-7 7"
//           />
//         </svg>
//       </button>
//     </div>
//   );
// }
const page = () => {
  return <div>To view map look at code above</div>;
};
export default page;
