# remove-runloops-codemod


A collection of codemod's for remove-runloops-codemod.

## Usage

To run a specific codemod from this project, you would run the following:

```
npx remove-runloops-codemod <TRANSFORM NAME> path/of/files/ or/some**/*glob.js

# or

yarn global add remove-runloops-codemod
remove-runloops-codemod <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Transforms

<!--TRANSFORMS_START-->
* [remove-run-in-tests](transforms/remove-run-in-tests/README.md)
<!--TRANSFORMS_END-->

## Contributing

### Installation

* clone the repo
* change into the repo directory
* `yarn`

### Running tests

* `yarn test`

### Update Documentation

* `yarn update-docs`