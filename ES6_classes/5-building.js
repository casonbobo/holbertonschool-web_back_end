class Building {
  constructor(sqft) {
    if (this.constructor !== Building && !this.evactuationWarningMessage) 
      throw new Error('Class extending Building must override evacuationWarningMessage');
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
   this._sqft = newSqft;
  }
}
export default Building;
