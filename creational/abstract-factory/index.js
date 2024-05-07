class FurnitureFactory {
  constructor(name, isKitchenFurniture) {
    this.name = name;
    this.isKitchenFurniture = isKitchenFurniture;
  }
}

class ElectronicsFactory {
  constructor(name, isKitchenElectronics) {
    this.name = name;
    this.isKitchenElectronics = isKitchenElectronics;
  }
}

class VestaShopAbstructFactory {
  constructor(type) {
    if (type === "furniture") {
      return new FurnitureFactory();
    } else if (type === "electronics") {
      return new ElectronicsFactory();
    } else {
      throw new Error("Invalid type");
    }
  }
}
