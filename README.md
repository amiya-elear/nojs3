# Backend Node MicroService Boilerplate code
This acts as a base for any backend microservice implemented in Node

# Folder Structure
```
server/: folder to keep source code
server/config/: folder to keep configuration files
server/main-module/: main controller folder keep api's function and queries
server/main-module/sub-module/: In case there are sub-modules, we can have the
following files directly in or as folders in each sub-module as per need
        index.js: first file to import all the other files
        controller.js: file to write all api's function
        model.js: file to write all mongodb queries
        seed-data: file to write all seed-data
server/routes/: for routing files
server/schema/: for writing mongodb schemas
server/utils/: to keep utility files for whole code
spec/: folder to write unit-test cases in jasmine
```

API
============
[Error Framework](server/utils/README.md)

License
==========
Proprietary and Confidential

Copyright (c) 2017 Elear Solutions Tech Private Limited. All rights reserved.

To any person (the "Recipient") obtaining a copy of this software and
associated documentation files (the "Software"):
All information contained in or disclosed by this software is confidential
and proprietary information of Elear Solutions Tech Private Limited and all
rights therein are expressly reserved. By accepting this material the
recipient agrees that this material and the information contained therein is
held in confidence and in trust and will NOT be used, copied, modified,
merged, published, distributed, sublicensed, reproduced in whole or in part,
nor its contents revealed in any manner to others without the express
written permission of Elear Solutions Tech Private Limited.

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

