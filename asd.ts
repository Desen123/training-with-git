type asd = number & string;

interface TEST {
  test: string[];
  someCollStuff: {
    test: number;
    te: Map<string, number>;
    cool: '123' | 'nothiong';
    vxc: asd
  }
}

// Ну, вообще весь typescript почти в этом и заключается
// Остается добавить сюда еще tsconfig и гуру готов