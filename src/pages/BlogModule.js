import module from '../assets/module.png'

function BlogModule(props) {
    return(
        <div className="module">
            <img className="mod" src={module} alt="module" />
            <h1>
                MODULE_NOT_FOUND requireStack
            </h1>
                <h2>
                    How To Remove Your Node_Modules
                    <br/>
                    And Reinstall
                    <br/>
                </h2>
                <h1>
                    REACT - NODE - EXPRESS .JS 
                </h1>
            <h2>
                REACT.JS
            </h2>
            <h3 className="node">
                STEP 1: DELETE NODE NODULES
            </h3>
                <p className="node">
                    rm -rf node_modules
                </p>

            <h3 className="node">
                STEP 2: DELETE PACKAGE.LOCK.JSON FILE
            </h3>
                <p className="node">
                    rm -f package-lock.json
                </p>

            <h3 className="node">
                STEP 3: CLEAN UP NPM CACHE
            </h3>
                <p className="node">
                    npm cache clean --force
                </p>

            <h3 className="node">
                STEP 4: REINSTALL PACKAGES
            </h3>
                <p className="node" >
                    npm i
                </p>

            <h2 className="node">
                    NODE / EXPRESS.JS
            </h2>
            <h3 className="node" >
                STEP 1: INSTALL EXPRESS
            </h3>
                <p className="node">
                    npm i express
                </p>

            <h3 className="node">
                STEP 2: DELETE NODE NODULES
            </h3>
                <p className="node">
                    rm -rf node_modules
                </p>

            <h3 className="node">
                STEP 3: DELETE PACKAGE.LOCK.JSON FILE
            </h3>
                <p className="node">
                    rm -f package-lock.json
                </p>

            <h3 className="node">
                STEP 4: CLEAN UP NPM CACHE
            </h3>
                <p className="node">
                    npm cache clean --force
                </p>

            <h3 className="node">
                STEP 5: REINSTALL PACKAGES
            </h3>
                <p className="node">
                    npm i
                </p>

</div>
    );
}

export default BlogModule;