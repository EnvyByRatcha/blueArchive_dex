export interface Student {
  _id: string;
  name: string;
  school: string;
  photoUrl: string;
  damageType: string;
  armorType: string;
  favorite: boolean;
  onRemove?: (id: string) => void;
}
