// sets 
/*
 Sets  data structure allows to add data to a container, a collection of objects or primitive types(string, number or booleans)
 and you can think of it as a Map where values are used as Map keys, with the map value always being  boolean type
*/

//  Initialize a Set

const s = new Set();
s.add('two')
s.add('three')
console.log(s)
// A set only stores unique elements , so calling s.add('one') multiple times won't add new items 

// You can't add multiple elements to a set at the same time,You need to call add() multiple times


//Check if an item is in the set

//once an element is in the set, we can check if the set contains it

s.has('two')
s.has('one') 
console.log(s.has('two'))
console.log(s.has('one'))

//Deleting an item from a Set by Key

s.delete('two')
console.log('deleted two from the set ')


// Determine the number of items in a set  we use the size() property 

console.log(s.size)


// deleting all items from the set using clear() method

s.clear()
console.log(s)



// iterate the items in  a set
// use the keys() or the values() methods - they are equivalent

s.add('one')
s.add('three')
s.add('true')


// Iterate the items in a set use keys() or values() methods they are equivalent

for(const k of s.keys()){
    console.log(k)
}

for(const k of s.values()){
    console.log(k)
}

// the entries() method returns an iterator, which you can use like

const i = s.entries()
console.log(i.next())


// using forEach() method

s.forEach(v=>console.log(v))


// 

for (const k of s){
    console.log(k)
}


// initialize a set with values, You can initialize a set with  a set of values

const m = new Set([1,4,5 ,'james','jones',true, false])



// converting a set into an array 

const a = [m.keys()]
console.log(a)

// or

const z = [m.values()]
console.log(z)
