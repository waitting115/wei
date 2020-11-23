// 封装事件处理事件
// const handleEvent = {
//     addEvent(target, type, callback) {
//         if(target.addEventListener) {
//             target.addEventListener(type, callback, false);
//         }else if (target.attachEvent) {
//             target.attachEvent('on' + type, function () {
//                 callback.call(target);
//             })
//         } else {
//             element['on' + type] = handler;
//         }
//     },
//     removeEvent(target, type, callback) {
//         if(target.removeEventListener) {
//             target.removeEventListener(type, callback, false);
//         } else if (target.detachEvent) {
//             target.detachEvent('on' + type, function () {
//                 callback.call(target);
//             })
//         } else {
//             target['on' + type] = null;
//         }
//     }
// }
// 封装事件代理函数
// const eventAgent = (parentNode, childNode, eventType, callback) => {
//     if(parentNode.addEventListener) {
//         parentNode.addEventListener(eventType, (e) => {
//             let targetNode = e.target;
//             if(targetNode.nodeName.toLowerCase() === childNode) {
//                 //将真正需要绑定监听事件的子节点传入回掉函数
//                 callback(targetNode);
//             }
//         })
//     } else if (parentNode.attachEvent) {
//         parentNode.attachEvent('on' + eventType, () => {
//             let targetNode = window.event.target;
//             if(targetNode.nodeName.toLowerCase() === childNode) {
//                 callback(targetNode);
//             }
//         })
//     } else {
//         parentNode['on' + eventType] = (e) => {
//             let targetNode = e.target;
//             if(targetNode.nodeName.toLowerCase() === childNode) {
//                 callback(targetNode);
//             }
//         }
//     }
// }

const wei = {
    handleEvent : {
        addEvent(target, type, callback) {
            if(target.addEventListener) {
                target.addEventListener(type, callback, false);
            }else if (target.attachEvent) {
                target.attachEvent('on' + type, function () {
                    callback.call(target);
                })
            } else {
                element['on' + type] = handler;
            }
        },
        removeEvent(target, type, callback) {
            if(target.removeEventListener) {
                target.removeEventListener(type, callback, false);
            } else if (target.detachEvent) {
                target.detachEvent('on' + type, function () {
                    callback.call(target);
                })
            } else {
                target['on' + type] = null;
            }
        }
    },
    eventAgent : (parentNode, childNode, eventType, callback) => {
        if(parentNode.addEventListener) {
            parentNode.addEventListener(eventType, (e) => {
                let targetNode = e.target;
                if(targetNode.nodeName.toLowerCase() === childNode) {
                    //将真正需要绑定监听事件的子节点传入回掉函数
                    callback(targetNode);
                }
            })
        } else if (parentNode.attachEvent) {
            parentNode.attachEvent('on' + eventType, () => {
                let targetNode = window.event.target;
                if(targetNode.nodeName.toLowerCase() === childNode) {
                    callback(targetNode);
                }
            })
        } else {
            parentNode['on' + eventType] = (e) => {
                let targetNode = e.target;
                if(targetNode.nodeName.toLowerCase() === childNode) {
                    callback(targetNode);
                }
            }
        }
    }
}
// export default wei;