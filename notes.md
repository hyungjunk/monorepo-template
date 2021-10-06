## Q
1. packages를 root repo로 만들면서 tsconfig.json에 compiler option이 들어가던데, 이건 무엇인지 정확히 알아보자.
2. publishConfig의 access?
3. tsconfig의 reference 프로퍼티?
4. A패키지 의존성에 B패키지가 있을 때 A패키지에서 `yarn`을 해도 `node_modules` 폴더 안에 B패키지가 추가되지 않는데 `lerna link`를 하면 생기는걸까
5. lerna의 `--concurrency N` 옵션이 이상하게 안 먹는다. 하지만 `--parallel`을 사용하니 동작한다. 왜지?

## Trivial

1. vscode는 eslintrc를 하나만 갖기를 원함. 그래서 루트 레벨에 eslint를 선언해두고 패키지레벨에서는 이를 extend해서 사용한다. 
eslint룰은 패키지 별로 다를 수 있으므로 (어떤건 JSX를 linting 하고 다른 패키지는 그냥 ts만 linting하는 등) parserOption은 패키지별로 따로 줘야 한다.


2. lerna를 사용해서 build를 하는 경우 `lerna run build`. 이 때 패키지들간에 의존관계가 있을 수 있는데, lerna는 알아서 가장 root에 빌드해야할 것이 어떤 패키지인지 판별하고 이를 먼저 build한다.
예를들어 A패키지 의존성에 B패키지가 있다면 B패키지를 먼저 빌드해야 A패키지에서 참조해서 사용가능하다. lerna는 별도의 설정없이도 B패키지를 먼저 빌드하여 깨지지 않게 만들어준다.

3. husky가 동작하지 않아서 한참을 찾아보니 4->7로 버전이 업그레이드 되며 많은 부분이 변경 됨. 
`package.json`에 선언해 둔 husky config가 동작하지 않아서 현재는 로컬에 `.husky` 폴더를 생성, 여기서 hook이 돌아가게 만든 상태.
아무리 그래도 `package.json`의 스크립트 실행이 못하게 되진 않았을텐데 로컬환경이 꼬였는지 점검해봐야할듯

4. verdaccio - local npm proxy


5

 