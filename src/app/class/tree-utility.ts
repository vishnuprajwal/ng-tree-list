export class TreeUtility {

    generateJSONTree(paths: string[]): any {

        var myjson = null;
        var rootTree = [];

        for (var i = 0; i < paths.length; i++) {
            var arr = paths[i].split('/');
            // console.log(arr);

            var npath = arr;
            // debugger;
            var tree = this.arrangeIntoTree(rootTree, npath);
            myjson = JSON.stringify(tree, null, 5);
        }
        return myjson;
    }

    arrangeIntoTree(tree, npath) {

        for (var i = 0; i < npath.length; i++) {
            var path = npath[i];
            // console.log(npath[i]);

            var currentLevel = tree;
            for (var j = 0; j < npath.length; j++) {
                var part = npath[j];

                // console.log(path);

                var existingPath = this.findWhere(currentLevel, 'text', part);

                if (existingPath) {
                    currentLevel = existingPath.items;
                } else {
                    var newPart = {
                        text: part,
                        items: [],
                    }

                    currentLevel.push(newPart);
                    currentLevel = newPart.items;
                }
            }
        }

        return tree;

    }

    findWhere(array, key, value) {

        let t = 0;
        while (t < array.length && array[t][key] !== value) { t++; };

        if (t < array.length) {
            return array[t]
        } else {
            return false;
        }
    }
}