# React drag and resize demo

A demo that implements dragging and resizing in React without external dependencies.

## WARNING: This is not a library, nor production-level quality code!

# Usage

```
 $ npm install
 $ npm run dev
```

# Rationale

I wanted to implement drag and drop plus resizing in my react application, but
found that existing solutions either add a large mental overhead to use, support
drag and drop, but not resizing, or are too large for a small case such as
mine. Thus, I looked at some of those solutions and implemented a minimal proof
of concept. Some of the requirements are:

 - Should not add tons of layers and abstractions
 - Be more or less performant
 - Do not have external requirements besides react
 - Should allow initial top-to-bottom data flow, but support an uncontrolled
   component at the bottom of the hierarchy that handles the internal drag/drop
   and resize logic. In other words, the top components control the main data in
   the leaves, but they do not need to worry about the act of drag/drop or
   resize (until it is finished)

## Implementation

TODO
