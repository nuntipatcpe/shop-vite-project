# Dependency
### Sass
```
pnpm i sass
```
```
sass --watch src/scss:src/css
```

# Lecture
```
let allPice = data.reduce((pre,currentValue)=>pre+(currentValue.pice*currentValue.quality),0);
```
```
import{useParams} from 'react-router-dom'
<Route path='/Products/:type' element={<Products/>} />
const {type} = useParams();
```