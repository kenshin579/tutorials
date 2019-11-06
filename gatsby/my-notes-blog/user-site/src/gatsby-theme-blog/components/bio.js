import React from "react"
import { Avatar, MediaObject, Icon } from "gatsby-theme-blog"
import Card from "../components/card"

export default ({ name, bio, avatar, twitterUrl, githubUrl }) => (
  <Card>
    <MediaObject>
      <Avatar {...avatar} />
      <div>
        <h3>{name}</h3>
        <p>{bio}</p>
        <a href={twitterUrl}>
          <Icon name="twitter" />
        </a>
        <a href={githubUrl}>
          <Icon name="github" />
        </a>
      </div>
    </MediaObject>
  </Card>
)