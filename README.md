# React Single Page Applications & Docker: An unlikely match

// TODO link the published blog article here

Code demos accompanying the [React Single Page Applications & Docker: An unlikely match](https://invariablyabandoned.com) article.

The initial example apps were made by running `npm create vite@latest` and selecting `React` -> `TypeScript`, stripping out the redundant code/files and then making the changes outlined in the article.

## Contents

- `static` contains the first example mentioned in the blog.

  ```sh
  # Change into the directory
  cd static

  # Build the container
  docker build --build-arg VITE_WELCOME_MESSAGE='Hello, Docker!' -t react-spa-docker-static:latest .

  # Run the built container
  docker run -d -p 8090:80 --name react-spa-docker-static react-spa-docker-static:latest

  #
  # On navigating to http://localhost:8090 in your web browser you should now see the example application!
  #

  # Stop the container and cleanup
  docker stop react-spa-docker-static
  docker image rm react-spa-docker-static:latest
  ```

- `build-on-start` contains the second example mentioned in the blog.

  ```sh
  # TODO Provide instructions
  ```

- `static-runtime-config` contains the fully-featured example.

  ```sh
  # TODO Provide instructions
  ```

- `docker-react` contains the fully-featured example making use of the [docker-react](https://github.com/danielemery/docker-react) library.

  ```sh
  # TODO Provide instructions
  ```

## Links

- TODO update this link
- [React Single Page Applications & Docker: An unlikely match](https://invariablyabandoned.com) The article these examples accompany.
- [docker-react](https://github.com/danielemery/docker-react) Helper npm package & docker container mentioned in the article.
