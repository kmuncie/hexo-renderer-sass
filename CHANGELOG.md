#### 0.5.0 (2022-8-03)

- Move to Node v16
- Bump all packages to latest
- Update from `node-sass` to `sass`

#### 0.3.2 (2017-6-15)

##### Chores

* **travis:** replace 7 by latest node version ([58b6dbbd](https://github.com/knksmith57/hexo-renderer-sass/commit/58b6dbbdbefe675040e33377ce1681afb54d5338))
* **package:** upgrade node-sass to version 4.5.3 ([610157e3](https://github.com/knksmith57/hexo-renderer-sass/commit/610157e39f8bafe44988b63795339bdb87b4c3e7))

#### 0.3.1 (2017-2-24)

##### Chores

* **package:** license field should be a string ([430bd883](https://github.com/knksmith57/hexo-renderer-sass/commit/430bd883a03b10a01d9cdc0e49b99cbf7fcea10c))

##### Bug Fixes

* **main:** hotfix hexo undefined regression This regression is introduced at f9a2ef62c9cf480f1fc3d757de57fd06b93cc164 due to the fact that `hexo` is not in global namespace. Here is a dirty hotfix and we will drop hexo 2.x support to migrate to new plugin syntax. ([da181f29](https://github.com/knksmith57/hexo-renderer-sass/commit/da181f29c1690e7e4178de8b2ddedd8ac4723ce1))

## 0.3.0 (2017-2-24)

Breaking changes: this version drops node.js 0.12 support.

### node-sass
- Bump `node-sass` version to 4.0 (#22)

### packages
- Add yarn lockfile (#20)
- Add engine requirement (#27)

### test
- Add eslint (#23)
- Add travis (#24)
- Use standard code style (#25)
- Better support on `sass` format (#28)

## 0.2.0 (2015-9-28)

