import React from "react"
import { BrowserRouter } from "react-router-dom"

export const provider = story => (
  <BrowserRouter>
    <div>{story()}</div>
  </BrowserRouter>
)

export const center = story => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {story()}
  </div>
)
