import { Group } from "three";
import Point from "./Point";

class Graph {
  private points: Array<Point>;

  constructor(count: number) {
    this.points = new Array<Point>(count);

    for (let i = 0; i < count; i++) {
      this.points.push(
        new Point(Graph.randomInt(), Graph.randomInt(), Graph.randomInt(), Math.random() * 0xffffff)
      );
    }
  }

  private static randomInt(): number {
    return Math.floor(Math.random() * 10);
  }

  public addToGroup(group: Group) {
    this.points.forEach((point: Point) => {
      group.add(point.getSphere());
    });
  }
}

export default Graph;
