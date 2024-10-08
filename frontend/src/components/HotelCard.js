import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import './HotelCard.css';


const HotelCard = ({ hotel }) => {
  return (
    <div className="hotel-card-container">
      <Card className="card" variant="outlined" style={{ backgroundColor: '#444', color: '#fff' }}>
        <CardMedia
          component="img"
          alt={hotel.name}
          style={{ height: '140px', objectFit: 'cover' }} 
          image={hotel.image || 'https://via.placeholder.com/140'}
        />
        <CardContent style={{ height: 'calc(100% - 140px)', display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6" gutterBottom>
            {hotel.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Address: {hotel.address || 'No address available.'}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Distance: {hotel.distance?.toFixed(2) || 'Distance not available.'} km
          </Typography>
          <Rating name="read-only" value={hotel.rating || 0} readOnly precision={0.1} />
          <Typography variant="body2" color="text.secondary">
            Rating: {hotel.rating?.toFixed(1) || 'No rating available.'}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default HotelCard;