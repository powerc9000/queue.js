window.Queue = (function(){

	function Node(data){
		return{
			next: null,
			data: data
		};
	}

	function Queue(){
		var q = Object.create(proto);
		q.head = q.tail = null;
		return q;
	}
	var proto = {
		push: function(data){
			var node = Node(data);
			if(!this.head){
				this.head = node;
			}
			if(!this.tail){
				this.tail = node;
			}
			else{
				this.tail.next = node;
				this.tail = node;
			}
			
		},
		pop: function(){
			var data;
			if(!this.isEmpty()){
				data = this.head.data;
				this.head = this.head.next;
				return data;
			}
			else{
				throw "Queue is empty";
			}
		},
		isEmpty: function(){
			if(this.head !== null){
				return false;
			}
			else{
				return true;
			}
		},
		front: function(){
			if(!this.isEmpty()){
				return this.head.data;
			}
			else{
				return null
			}
		}
	}
	return Queue;
}())