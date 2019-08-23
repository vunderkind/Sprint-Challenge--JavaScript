// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(prop){
        this.length = prop.length;
        this.width = prop.width;
        this.height = prop.height; 
  }
    volume() {
        return this.length * this.width * this.height; 
  }
    surfaceArea() {
        return 2 * (this.length *this.width + this.length * this.height + this.width * this.height); 
    }

}
let deets = {
    length: 4,
    height: 5,
    width: 5,
}
let cuboid = new CuboidMaker(deets);
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(cuboid.volume()); // 100
  console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    volume() {
        return this.length*this.length*this.length;
    }
    surfaceArea() {
        return (this.length * this.length) * 6;
    }
}

let cube = {
    length: 4
}

let newCubemaker = new CubeMaker(cube);
console.log(newCubemaker.volume()); // 64
  console.log(newCubemaker.surfaceArea()); // 96