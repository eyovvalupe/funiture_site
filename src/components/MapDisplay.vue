<template>
    <div class="w-full h-[600px]">
      <GMapMap
        :center="location"
        :zoom="14"
        class="w-full h-full"
      >
        <GMapMarker :position="location" />
      </GMapMap>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      location: {
        type: Object,
        required: true,
        default: () => ({ lat: 37.7749, lng: -122.4194 }), // Default location: San Francisco
      },
    },
  };
  </script>
  
  <style>
  /* Tailwind will handle most styles; customize here if needed */
  </style>
  