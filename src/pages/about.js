import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Roffes blogg"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0, height: "50vh", width: "auto" }} src="./rolf.jpg" alt="Rolf" />
        <h1>
          Hej!
        </h1>
        <p>Jag heter Rolf Johansson och detta är min blogg där jag kommer skriva om ämnen som intresserar mig.</p>
        <Link to="/">
          <Button marginTop="35px">Till bloggen</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
