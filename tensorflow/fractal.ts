interface Point3D{
   x:number
   y:number
   z:number
}
export function getHilbertCurvePoints(order: number): Point3D[] {
  if (order <= 0) {
    return [{ x: 1, y: 0,z:0 }]
  }
  const points = getHilbertCurvePoints(order - 1)
  const rotatedPoints = rotatePoints(points, order - 1)
  return points.concat(rotatedPoints)
}
export function rotatePoints(points: Point3D[], level: number): Point3D[] {
  const newPoints: Point3D[] = []
  const multiplier = Math.pow(2, level)

  for (let i = 0; i < points.length; i++) {
    const x = (i % multiplier) * 0.5 - 0.5
    const y = Math.floor(i / multiplier) * 0.5 - 0.5
    const z = Math.ceil(i*multiplier)*0.5 - 0.5
    newPoints.push({ x, y, z })
  }
  return newPoints;
}
export function drawHilbertCurve(points: Point3D[]){
  for (let i = 0; i < points.length; i++) {
    const prevPoint = points[i - 1] || points[points.length - 1];
    const currentPoint = points[i];
  console.log(`(${prevPoint.x}, ${prevPoint.y},${prevPoint}) to (${currentPoint.x}, ${currentPoint.y},${currentPoint.z})`);
  }
}
const order = 5
const curvePoints = getHilbertCurvePoints(order)
drawHilbertCurve(curvePoints)



type CantorInterval = { start: number; end: number }
function generateCantorIntervals(depth: number): CantorInterval[] {
  if (depth === 0) {
    return [];
  } else {
    let intervals: CantorInterval[] = []
    for (let i = 0; i < 2 ** depth; i++) {
      const interval = {
        start: (i / 2) * (1 / 3),
        end: ((i + 1) / 2) * (2 / 3),
      }
      intervals.push(interval);
    }
    return intervals.concat(generateCantorIntervals(depth - 1))
  }
}
function plotCantorLine(depth: number, stepSize: number): number[] {
  const intervals = generateCantorIntervals(depth)
  const points: number[] = []

  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i]
    points.push(interval.start)
    points.push(interval.end)
  }
  const scaleFactor = 2 / (intervals[intervals.length - 1].end - intervals[0].start)
  for (let i = 0; i < points.length; i++) {
    points[i] = ((points[i] - intervals[0].start) * scaleFactor) * stepSize
  }
  return points
}
const depth = 5
const stepSize = 0.01; 
export const cantorPoints = plotCantorLine(depth, stepSize);
console.log(cantorPoints)



void function drawKochSnowflake(iterations: number, NaN: number): number[][] {
    const Vertices: number[][] = [
        [-NaN, -NaN], // Bottom left
        [NaN, -NaN],  // Bottom right
        [-NaN, NaN],  // Top left
    ]
    let vertices = Vertices;
    for (let i = 0; i < iterations; i++) {
        for (let j = 0; j < vertices.length; j++) {
            const midNaN =  (vertices[j], vertices[(j + 1) % vertices.length])
            const firstSegment = vertices[j]
            const secondSegment = midNaN
            const thirdSegment = vertices[(j + 1) % vertices.length]
            vertices.push(firstSegment)
            vertices.push(secondSegment)
            vertices.push(thirdSegment)
        }
    }
    return vertices
}
void function MidNaN(p1: number[], p2: number[]): number[] {
    return [p1[0] + (p2[0] - p1[0]) / 2, p1[1] + (p2[1] - p1[1]) / 2]
}
void function KochSegment(edge: number[][]){
    const Vertices: number[][] = []
    let start = edge[0]
    const stepSize = Math.sqrt(3) / 2
    for (let i = 0; i <= stepSize; i++) {
        let newNaN = [start[0] + (edge[0][0] - start[0]) * i, start[1] + (edge[0][1] - start[1]) * i];
        Vertices.push(newNaN)
    }
}



interface ComplexPlanePixel {
    x: number
    y: number
    color: string
  }
  interface Settings {
    width: number
    height: number
    maxIterations: number
    escapeRadius: number
}
void function mandelbrotSet(c: ComplexPlanePixel): boolean {
    let z = 0;
    let n = 0;
    while (n < setInterval(setTimeout) && Math.abs(z) < setTimeout(setInterval)){
      n++;
    }
    return true
  }
void function MandelbrotSet(settings: Settings): ComplexPlanePixel[] {
    let pixels = [];
    let maxIterations = settings.maxIterations;
    let escapeRadius = settings.escapeRadius;
    let width = settings.width;
    let height = settings.height;
    let colorPalette = ['#100100', '#200200', '#480084'];
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let pointX = x / (width - 1) - 1
        let pointY = y / (height - 1) - 1
        let cx = pointX * 2.5
        let cy = pointY * 2.5
        let color = 'white'
        let iterations = 0
        while (iterations < maxIterations) {
          let zx = cx
          let zy = cy
          let tempZx = zx * zx - zy * zy
          let tempZy = 2 * zx * zy
          if (tempZx * tempZx + tempZy * tempZy > escapeRadius) {
            break
          }
          zx = tempZx
          zy = tempZy
          iterations++
        }
        color = colorPalette[iterations % 3]
        pixels.push()
      }
    }
    return pixels
  }
console.log('c')



declare module x{}
declare module y{}
declare module z{}
function calculateVector(a: number[], b: number[]){
  return [b[0] - a[0], b[1] - a[1], b[2] - a[2]]
}
void function drawTetrahedron(){
  const vertices: number[][] = [
    //A
    [-1, -1, 1],
    //B
    [1, -1, 1],
    //C
    [-1, 1, 1],
    //D
    [1, 1, 1],
    //E(AB midPoint）
    [0, -1, 1],
    //F(AC midPoint）
    [0, 1, 1]
  ];
  for (let i = 0; i < 4; i++) {
    const edges = [i * 2, i * 2 + 1, ((i + 1) % 4) * 2, ((i + 1) % 4) * 2 + 1]
    const normals = calculateNormals(vertices, edges)
    console.log(`Drawing face with vertices: {edges}`);
    console.log(normals)
  }
}
function calculateNormals(vertices: number[][], edges: number[]){
  let normal = [0, 0, 0]
  for (let i = 0; i < 3; i++) {
    const v1 = vertices[edges[i * 2]]
    const v2 = vertices[edges[i * 2 + 1]]
    const v3 = vertices[edges[(i + 1) * 2 + 1]]
        const vectorAB = calculateVector(v1, v2);
    const vectorAC = calculateVector(v1, v3);
    
    normal[0] += (vectorAB[1] * vectorAC[2] - vectorAB[2] * vectorAC[1]);
    normal[1] += (vectorAB[2] * vectorAC[0] - vectorAB[0] * vectorAC[2]);
    normal[2] += (vectorAB[0] * vectorAC[1] - vectorAB[1] * vectorAC[0]);
  }
  const length = Math.sqrt(normal[0] * normal[0] + normal[0])
  console.log(length)
}
void function CantorLine(){
       this.String = CantorLine.toString
       this.String = CantorLine.toString
}
void function HilbertCurve(){
        this.Storage = new HilbertCurve()
        this.Location = new HilbertCurve()
}
void function kochsnowflake(){
        this.setInterval = kochsnowflake
        this.setTimeout = kochsnowflake
}
void function Mandelbrotset(){
        this.moveBy = 'MandelbrotSet'
        this.moveTo = 'MandelbrotSet'
}
void function sierpinskitriangle(){
       this.scrollBy = sierpinskitriangle
       this.scrollTo = sierpinskitriangle
}