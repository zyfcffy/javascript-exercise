import Person from './person';

export default class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    if (this.klass === undefined) {
      return `${super.basicIntroduce()} I am a Teacher. I teach No Class.`;
    }
    return `${super.basicIntroduce()} I am a Teacher. I teach Class ${this.klass}.`;
  }
}
