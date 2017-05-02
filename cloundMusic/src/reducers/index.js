import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux'
import * as Vibrant from 'node-vibrant'
import {
    RECEIVE_MUSICS,
    ACTIVE_ITEM,
    CHANGE_DID_INVALIDATE,
    RECEIVE_PLAYLIST_DETAIL,
    CHANGE_IS_SHOW_PLAY_VIEW,
    CHANGE_IS_SHOW_LEFT_MENU,
    RECEIVE_SEARCH_LSIT
} from '../constants/ActionTypes';

import  {changeCurrentPlay}  from './playController'

const activeItem = (state = 'all', action) => {
    switch (action.type) {
        case ACTIVE_ITEM :
            return action.classify;
        default:
            return state;
    }
}

const musics = (state = {
    more: false,
    didInvalidate: false, //做无效
    offset: 0,
    items: []
}, action) => {
    switch (action.type) {
        case RECEIVE_MUSICS:
            return {
                ...state,
                more: action.musics.more,
                offset: action.musics.offset,
                didInvalidate: action.musics.didInvalidate,
                items: state.items.concat(action.musics.playlists)
            }
        case CHANGE_DID_INVALIDATE:
            return {
                ...state,
                didInvalidate: action.musics.didInvalidate
            }

    }

}

const receiveMusics = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_MUSICS:
            return {
                ...state,
                [action.classify]: musics(state[action.classify], action)
            }
        default:
            return state
    }
}

const receivePlaylistDetail = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_PLAYLIST_DETAIL:
            return {
                ...state,
                detail: action.detail
            }
        default:
            return state;
    }
}

const changeIsShowPlayView = (state = {isShowPlayView: false}, action) => {
    switch (action.type) {
        case CHANGE_IS_SHOW_PLAY_VIEW:
            return {
                isShowPlayView: action.isShowPlayView
            }

        default:
            return state;
    }
}

const changeIsShowLeftMenu = (state = {isShowLeftMenu: false}, action) => {
    switch (action.type) {
        case CHANGE_IS_SHOW_LEFT_MENU:
            return {
                isShowLeftMenu: action.isShowLeftMenu
            }
        default:
            return state
    }
}

//搜索歌曲
const receiveSearchList = (state = {}, action) => {
    switch (action.type){
        case RECEIVE_SEARCH_LSIT:
            return {
                ...state,
                list : action.list
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    receiveMusics, //歌曲列表信息 全局对象state上面的receiveMusices
    activeItem, //当前激活的选项 全局对象state上面的activeItem
    receivePlaylistDetail,//歌单详情
    changeIsShowPlayView,
    changeCurrentPlay,
    changeIsShowLeftMenu,
    receiveSearchList,
    routing
})

export default rootReducer