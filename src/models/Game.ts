class Game {
  title: string;
  category: string;
  system: string;
  description: string;
  infos: string[];
  image: string;
  id: number;

  constructor(
    title: string,
    category: string,
    system: string,
    description: string,
    infos: string[],
    image: string,
    id: number
  ) {
    this.id = id;
    this.category = category;
    this.description = description;
    this.title = title;
    this.system = system;
    this.infos = infos;
    this.image = image;
  }
}

export default Game;
