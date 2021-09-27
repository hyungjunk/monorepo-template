## Q
1. packages를 root repo로 만들면서 tsconfig.json에 compiler option이 들어가던데, 이건 무엇인지 정확히 알아보자.
2. publishConfig의 access?


## Trivial

1. vscode는 eslintrc를 하나만 갖기를 원함. 그래서 루트 레벨에 eslint를 선언해두고 패키지레벨에서는 이를 extend해서 사용한다. 
eslint룰은 패키지 별로 다를 수 있으므로 (어떤건 JSX를 linting 하고 다른 패키지는 그냥 ts만 linting하는 등) parserOption은 패키지별로 따로 줘야 한다.

2. 