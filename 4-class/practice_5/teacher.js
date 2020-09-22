import Person from './person';

export default class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    return `${super.basicIntroduce()} I am a Teacher. I teach ${
      this.klass ? `Class ${this.klass}` : `No Class`
    }.`;
  }
}
