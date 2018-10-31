////function clone(): any {
////    return this.slice(0);
////}
////function removeFirst(predicate: (value: any, index: number) => boolean, fromIndex?: number): boolean {
////    if (predicate == null)
////        return false;
////    if (fromIndex == null)
////        fromIndex = 0;
////    else if (fromIndex < 0 || fromIndex >= this.length)
////        return false;
////    for (let i = fromIndex; i < this.length; i++) {
////        if (predicate(this[i], i)) {
////            this.splice(i, 1);
////            return true;
////        }
////    }
////    return false;
////}
////function removeAll(predicate: (value: any, index: number) => boolean, fromIndex?: number): number {
////    if (fromIndex == null)
////        fromIndex = 0;
////    if (fromIndex < 0 || fromIndex >= this.length)
////        return 0;
////    if (predicate == null) {
////        var length = this.length;
////        this.splice(fromIndex, this.length);
////        return length - this.length;
////    }
////    // 逆序遍历，防止下标错乱
////    var count = 0;
////    for (let i = this.length - 1; i >= fromIndex; i--) {
////        if (predicate(this[i], i)) {
////            this.splice(i, 1);
////            count++;
////        }
////    }
////    return count;
////}
//module xlLib {
//	/**
//	 * 可记录调用"this"的函数代理
//	 */
//	export class SinglecastEvent {
//		public action: Function;
//		public self: any;
//		constructor(action?: Function, self?: any) {
//			this.action = action;
//			this.self = self;
//		}
//		call(...argArray: any[]): any {
//			return this.apply(argArray);
//		}
//		apply(argArray?: any): any {
//			if (this.action == null)
//				return;
//			return this.action.apply(this.self, argArray);
//		}
//	}
//	/**
//	 * 多播事件
//	 */
//	export class MulticastEvent {
//		private list: SinglecastEvent[]; // 回调函数列表
//		call(...argArray: any[]): any {
//			return this.apply(argArray);
//		}
//		apply(argArray?: any): void {
//			let len = this.length;
//			if (len == 0)
//				return;
//			// 单播情况的优化
//			if (len == 1) {
//				let f = this.list[0];
//				f.apply(argArray);
//				return;
//			}
//            // 多播调用时必须拷贝一份，避免调用过程中容器修改
//            for (let f of this.list.clone()) {
//				f.apply(argArray);
//			}
//		}
//		/**
//		 * 挂载事件回调
//		 * @param action
//		 * @return 返回挂载的事件回调函数本身，方便lambda挂载结果记录以供移除
//		 */
//		add(action: Function, thisArg?: any): Function {
//			if (action == null)
//				return action;
//			if (this.list == null)
//				this.list = [];
//			this.list.push(new SinglecastEvent(action, thisArg));
//			return action;
//		}
//		/**
//		 * 卸载事件回调
//		 * @param action
//		 * @return 卸载成功，false表示该事件中并不包含给定的回调
//		 */
//		remove(action: Function): boolean {
//			if (typeof action !== "function" || this.list == null)
//				return false;
//			return this.list.removeFirst(i => i.action == action);
//		}
//		/**
//		 * 卸载所有以指定对象作为调用this的回调函数
//		 */
//		removeOn(thisArg: any): number{
//			if (this.list == null)
//				return 0;
//			return this.list.removeAll(i => i.self == thisArg);
//		}
//		/**
//		 * 卸载所有挂载的事件
//		 */
//		removeAll(): void {
//			this.list = null;
//		}
//		/**
//		 * 得到事件中包含的回调数目
//		 */
//		get length(): number {
//			if (this.list == null)
//				return 0;
//			return this.list.length;
//		}
//	}
//}
