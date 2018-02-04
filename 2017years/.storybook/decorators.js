/* eslint-disable flowtype/require-valid-file-annotation */
import React from "react"

export const provider = story => <div>{story()}</div>

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
