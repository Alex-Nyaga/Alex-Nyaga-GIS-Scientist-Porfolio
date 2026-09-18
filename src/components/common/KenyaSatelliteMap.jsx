import { useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Simplified outline of Kenya (not survey-grade) used to highlight the
// country on top of the satellite basemap. Coordinates are [lng, lat]
// per the GeoJSON spec.
const KENYA_OUTLINE = {
  type: "Feature",
  properties: { name: "Kenya" },
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [34.0, 4.6],
        [36.9, 4.5],
        [41.0, 3.9],
        [41.8, 1.7],
        [41.6, -1.7],
        [40.5, -2.5],
        [39.6, -4.35],
        [39.2, -4.67],
        [37.7, -3.3],
        [34.6, -1.0],
        [33.9, -0.1],
        [34.0, 1.0],
        [34.5, 3.5],
        [34.0, 4.6],
      ],
    ],
  },
};

const NAIROBI = [-1.2921, 36.8219];

// Esri "World Imagery" satellite tiles — free, no API key required.
const SATELLITE_URL =
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";
const SATELLITE_ATTRIBUTION =
  "Tiles &copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community";

// Reference overlay (borders + place labels) laid on top of the imagery
// so country outlines and city names are readable on a satellite view.
const LABELS_URL =
  "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}";

const nairobiIcon = L.divIcon({
  className: "",
  html: `
    <span style="position:relative;display:flex;align-items:center;justify-content:center;width:20px;height:20px;">
      <span style="position:absolute;inset:0;border-radius:9999px;background:#5eeaa8;opacity:0.35;"></span>
      <span style="width:10px;height:10px;border-radius:9999px;background:#5eeaa8;border:2px solid #0a121a;"></span>
    </span>
  `,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

export default function KenyaSatelliteMap({ className = "" }) {
  const bounds = useMemo(() => L.geoJSON(KENYA_OUTLINE).getBounds(), []);
  // Pad the strict outline bounds a little so the view has some breathing
  // room, then lock panning to that padded box — this is also what the
  // map is confined to, so it can never be dragged/zoomed out to show
  // anywhere outside Kenya.
  const maxBounds = useMemo(() => bounds.pad(0.15), [bounds]);

  return (
    <MapContainer
      bounds={bounds}
      boundsOptions={{ padding: [18, 18] }}
      maxBounds={maxBounds}
      maxBoundsViscosity={1.0}
      minZoom={6}
      scrollWheelZoom={false}
      zoomControl={false}
      attributionControl={false}
      className={`h-full w-full bg-background-surface ${className}`}
    >
      <TileLayer url={SATELLITE_URL} attribution={SATELLITE_ATTRIBUTION} />
      <TileLayer url={LABELS_URL} />

      <Marker position={NAIROBI} icon={nairobiIcon}>
        <Popup>Nairobi, Kenya</Popup>
      </Marker>
    </MapContainer>
  );
}
