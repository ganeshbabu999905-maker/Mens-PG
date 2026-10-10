import React from 'react';
import {
  Wifi,
  Droplets,
  Flame,
  Bed,
  Archive,
  Sparkles,
  ShieldCheck,
  Video,
  KeyRound,
  SunMedium,
  Bath,
  Shirt,
  CupSoda,
  Zap,
  BookOpen,
  Armchair,
  UtensilsCrossed,
  Bike,
  Trash2,
  Wrench,
  Coffee,
  Refrigerator,
  Compass,
  CheckCircle
} from 'lucide-react';

interface FacilityIconProps {
  name: string;
  className?: string;
}

export const FacilityIcon: React.FC<FacilityIconProps> = ({ name, className = 'w-6 h-6' }) => {
  switch (name) {
    case 'Wifi':
      return <Wifi className={className} />;
    case 'Droplets':
      return <Droplets className={className} />;
    case 'Flame':
      return <Flame className={className} />;
    case 'Bed':
      return <Bed className={className} />;
    case 'Archive':
      return <Archive className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    case 'Video':
      return <Video className={className} />;
    case 'KeyRound':
      return <KeyRound className={className} />;
    case 'SunMedium':
      return <SunMedium className={className} />;
    case 'Bath':
      return <Bath className={className} />;
    case 'Shirt':
      return <Shirt className={className} />;
    case 'CupSoda':
      return <CupSoda className={className} />;
    case 'Zap':
      return <Zap className={className} />;
    case 'BookOpen':
      return <BookOpen className={className} />;
    case 'Armchair':
      return <Armchair className={className} />;
    case 'UtensilsCrossed':
      return <UtensilsCrossed className={className} />;
    case 'Bike':
      return <Bike className={className} />;
    case 'Trash2':
      return <Trash2 className={className} />;
    case 'Wrench':
      return <Wrench className={className} />;
    case 'Coffee':
      return <Coffee className={className} />;
    case 'Refrigerator':
      return <Refrigerator className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    default:
      return <CheckCircle className={className} />;
  }
};
