# 아토믹 디자인 패턴으로 구성된 Component Structure

- [아토믹 디자인 패턴으로 구성된 Component Structure](#아토믹-디자인-패턴으로-구성된-component-structure)
  - [컴포넌트 분리 기준](#컴포넌트-분리-기준)
    - [Atoms](#atoms)
    - [Molecules](#molecules)
    - [Organisms](#organisms)
    - [Templates](#templates)
    - [Pages](#pages)
  - [상태관리](#상태관리)
  - [폴더구조](#폴더구조)

## 컴포넌트 분리 기준

컴포넌트 단위는 Atoms(원자), Molecules(분자), Organisms(유기체), Templates(템플릿)으로 구성되어지고 최종적으로는 Pages 단위가 된다.

<img src="./atomicDesignPattern.png" width="800">
<img src="./atomicDesignPatternAnimation.gif" width="500">

### Atoms

`Atoms` 는 버튼, 제목, 텍스트 입력 필드와 같은 가장 작은 구성 컴포넌트이다.
모든 컴포넌트들의 기초가 되는 블록이며, 더 이상 분해 될 수 없는 필수 요소이다.

- ⚠️ 특정 기능을 수행하는 것이 아니기에 `onChange` 와 같은 로직이 들어가서는 안된다.
- ⚠️ `Atom` 에 margin이나 position과 같은 위치에 영향을 주는 속성을 지정하지 않는다.

### Molecules

`Molecules` 는 2개 이상의 `Atom` 을 조합한 컴포넌트이다.
ex) `Label Atom` + `(Input | CheckBox | Select) Atom` 조합으로 FormItem 이라는 `Molecule` 를 만들 수 있다.

### Organisms

`Organisms` 는 `Molecule` 과 `Atoms` 를 조합한 컴포넌트이다.
ex) `FormItem Molecule` 와 `Button Atom` 를 조합하여 `SignUpForm Organism` 을 만들 수 있다.

### Templates

`Templates` 는 `Organisms` 를 모아 템플릿으로 생성한 것이다.
비지니스 로직이 아니라 완전히 스타일링에 집중한 단위이다.

⚠️ 템플릿은 오직 그리드만을 가져야하고, 특정 컴포넌트의 위치를 지정해선 안된다.

### Pages

`Pages` 는 실제 페이지를 구성하는 단위로 `/src/pages` 에 위치한다.
템플릿에 알맞은 컴포넌트를 주입하게 되면, `template` 에서 미리 만들어 놓은 레이아웃에 맞게끔 사용할 수 있도록 한다.
전체적인 로직이나 상태 등을 `Page` 레벨에서 컨트롤해야 한다.

## 상태관리

각각 컴포넌트의 일반적인 상태 (Html Elements 가 지닌 기본 속성 disabled, focused)은 각 컴포넌트에서의 상태를 관리하되, 직접적인 사용이 필요한 데이터에 대한 상태는 최상위 단위인 Pages 레벨에서 props drilling 으로 전달해야 한다.

## 폴더구조

```cli
$ tree src/

src/
├── components
│   ├── atoms
│   │   ├── button
│   │   │   └── Button.tsx
│   │   ├── card
│   │   ├── input
│   │   └── select
│   ├── molecules
│   ├── organisms
│   └── templates
└── pages
```

Typescript 를 도입하여 단위마다 필요한 데이터를 type 으로 관리하고 있기에 `page` ➡️ `organism` ➡️ `molecule` ➡️ `atom` 로 props 를 전달함에 있어 의도치 않은 에러를 방지할 수 있다.
