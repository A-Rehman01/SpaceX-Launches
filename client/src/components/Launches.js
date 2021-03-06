import React, { Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";
import Loader from "./Loader";

// creating query

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  return (
    <Fragment>
      <h1 className="display-4 my-5" style={{ fontSize: 45, marginTop: 20 }}>
        LAUNCHES
      </h1>

      <MissionKey />
      <Query query={LAUNCHES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) console.error(error);

          return (
            <Fragment>
              {data.launches.map((launch) => (
                <LaunchItem key={launch.flight_number} launch={launch} />
              ))}
            </Fragment>
          );
        }}
      </Query>
    </Fragment>
  );
};

export default Launches;
