json.array! @trails do |trail| 
  json.extract! trail, :id, :name, :description, :distance, :elevation_gain, :difficulty, :route_type, :lat, :lon
  json.coverPhotoUrl url_for(trail.coverPhoto)
end