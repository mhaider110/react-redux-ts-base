import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, AppDataState } from '../../state';
import './home-styles.scss';
export default function Home() {

  const dispatch = useDispatch();
  const { saveAppData } = bindActionCreators(actionCreators, dispatch);
  const stateData = useSelector((state: AppDataState) => state.appData);

  // after component rendering
  useEffect(() => {
    const appData = {
      userName: 'TestUser',
      userEmail: 'TestEmail'
    }
    saveAppData(appData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="hw-container full-max-width fixed-padding-container">
      <h2 className="hw-block--mt-larger">
        <span className="text-bold">{"Hello "} {stateData.userName } </span>
      </h2>
    </div>
  )
}
