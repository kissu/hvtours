<template>

<div class="theme-hero-area">
      <div class="theme-hero-area-bg-wrap">
        <div class="theme-hero-area-bg-pattern theme-hero-area-bg-pattern-ultra-light"></div>
        <div class="theme-hero-area-grad-mask theme-hero-area-grad-mask-i"></div>
      </div>
      <div class="theme-hero-area-body">
        <div class="theme-page-section _pt-150 _pb-100 _pv-mob-50">
          <div class="container">
            <div class="row">
              <div class="col-md-10 col-md-offset-1">
                <div class="theme-search-area-tabs">
                  <div class="theme-search-area-tabs-header _c-w _ta-c _mb-20">
                    <h1 class="theme-search-area-tabs-title theme-search-area-tabs-title-sm">{{ $t('slidertag') }}</h1>
                  </div>
                  <div class="tabbable">
                    <ul class="nav nav-tabs nav-white nav-line nav-center nav-lg nav-no-br nav-mob-inline" role="tablist">
                      <li class="active" role="presentation">
                        <a aria-controls="SearchAreaTabs-1" role="tab" data-toggle="tab" href="#SearchAreaTabs-1">Hotels</a>
                      </li>
                      <li role="presentation">
                        <a aria-controls="SearchAreaTabs-2" role="tab" data-toggle="tab" href="#SearchAreaTabs-2">Homes</a>
                      </li>
                      <li role="presentation">
                        <a aria-controls="SearchAreaTabs-3" role="tab" data-toggle="tab" href="#SearchAreaTabs-3">Flights</a>
                      </li>
                      <li role="presentation">
                        <a aria-controls="SearchAreaTabs-4" role="tab" data-toggle="tab" href="#SearchAreaTabs-4">Cars</a>
                      </li>
                      <li role="presentation">
                        <a aria-controls="SearchAreaTabs-5" role="tab" data-toggle="tab" href="#SearchAreaTabs-5">Experiences</a>
                      </li>
                    </ul>
                    <div class="tab-content _pt-10">
                      <div class="tab-pane active" id="SearchAreaTabs-1" role="tab-panel">
                        <div class="theme-search-area theme-search-area-stacked theme-search-area-white">
                          <div class="theme-search-area-form">
                            <div class="row" data-gutter="none">
                              <div class="col-md-3 ">
                                <div class="theme-search-area-section first theme-search-area-section-fade-white theme-search-area-section-no-border theme-search-area-section-mr theme-search-area-section-sm theme-search-area-section-curved">
                                  <div class="theme-search-area-section-inner">
                                    <i class="theme-search-area-section-icon lin lin-location-pin"></i>
                                    <input class="theme-search-area-section-input typeahead" type="text" placeholder="Hotel Location" data-provide="typeahead"/>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-4 ">
                                <div class="row" data-gutter="none">
                                  <div class="col-md-6 ">
                                    <div class="theme-search-area-section theme-search-area-section-fade-white theme-search-area-section-no-border theme-search-area-section-mr theme-search-area-section-sm theme-search-area-section-curved">
                                      <div class="theme-search-area-section-inner">
                                        <i class="theme-search-area-section-icon lin lin-calendar"></i>
                                        <input class="theme-search-area-section-input datePickerStart _mob-h" value="Wed 06/27" type="text" placeholder="Check-in"/>
                                        <input class="theme-search-area-section-input _desk-h mobile-picker" value="2018-06-27" type="date"/>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-6 ">
                                    <div class="theme-search-area-section theme-search-area-section-fade-white theme-search-area-section-no-border theme-search-area-section-mr theme-search-area-section-sm theme-search-area-section-curved">
                                      <div class="theme-search-area-section-inner">
                                        <i class="theme-search-area-section-icon lin lin-calendar"></i>
                                        <input class="theme-search-area-section-input datePickerEnd _mob-h" value="Mon 07/02" type="text" placeholder="Check-out"/>
                                        <input class="theme-search-area-section-input _desk-h mobile-picker" value="2018-07-02" type="date"/>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-4 ">
                                <div class="row" data-gutter="none">
                                  <div class="col-md-6 ">
                                    <div class="theme-search-area-section theme-search-area-section-fade-white theme-search-area-section-no-border theme-search-area-section-mr theme-search-area-section-sm theme-search-area-section-curved quantity-selector" data-increment="Rooms">
                                      <div class="theme-search-area-section-inner">
                                        <i class="theme-search-area-section-icon lin lin-tag"></i>
                                        <input class="theme-search-area-section-input" value="1 Room" type="text"/>
                                        <div class="quantity-selector-box" id="HotelSearchRooms">
                                          <div class="quantity-selector-inner">
                                            <p class="quantity-selector-title">Rooms</p>
                                            <ul class="quantity-selector-controls">
                                              <li class="quantity-selector-decrement">
                                                <a href="#">&#45;</a>
                                              </li>
                                              <li class="quantity-selector-current">1</li>
                                              <li class="quantity-selector-increment">
                                                <a href="#">&#43;</a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-6 ">
                                    <div class="theme-search-area-section theme-search-area-section-fade-white theme-search-area-section-no-border theme-search-area-section-mr theme-search-area-section-sm theme-search-area-section-curved quantity-selector" data-increment="Guests">
                                      <div class="theme-search-area-section-inner">
                                        <i class="theme-search-area-section-icon lin lin-people"></i>
                                        <input class="theme-search-area-section-input" value="2 Guests" type="text"/>
                                        <div class="quantity-selector-box" id="HotelSearchGuests">
                                          <div class="quantity-selector-inner">
                                            <p class="quantity-selector-title">Guests</p>
                                            <ul class="quantity-selector-controls">
                                              <li class="quantity-selector-decrement">
                                                <a href="#">&#45;</a>
                                              </li>
                                              <li class="quantity-selector-current">1</li>
                                              <li class="quantity-selector-increment">
                                                <a href="#">&#43;</a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-1 ">
                                <button class="theme-search-area-submit _mt-0 theme-search-area-submit-no-border theme-search-area-submit-white theme-search-area-submit-sm theme-search-area-submit-curved">Search</button>
                              </div>
                            </div>
                          </div>
                          <div class="theme-search-area-options _mob-h theme-search-area-options-center theme-search-area-options-dot-white clearfix">
                            <div class="btn-group theme-search-area-options-list" data-toggle="buttons">
                              <label class="btn btn-primary active">
                                <input type="radio" name="hotel-options" id="hotel-option-1" checked/>Any
                              </label>
                              <label class="btn btn-primary">
                                <input type="radio" name="hotel-options" id="hotel-option-2"/>Business
                              </label>
                              <label class="btn btn-primary">
                                <input type="radio" name="hotel-options" id="hotel-option-3"/>Family
                              </label>
                              <label class="btn btn-primary">
                                <input type="radio" name="hotel-options" id="hotel-option-4"/>Luxury
                              </label>
                              <label class="btn btn-primary">
                                <input type="radio" name="hotel-options" id="hotel-option-5"/>Budget
                              </label>
                              <label class="btn btn-primary">
                                <input type="radio" name="hotel-options" id="hotel-option-6"/>Romantic
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane" id="SearchAreaTabs-2" role="tab-panel">
                        <div class="theme-search-area theme-search-area-stacked theme-search-area-white">
                          <div class="theme-search-area-form">
                            <div class="row" data-gutter="none">
                              <div class="col-md-4 ">
                                <div class="theme-search-area-section first theme-search-area-section-fade-white theme-search-area-section-no-border theme-search-area-section-mr theme-search-area-section-sm theme-search-area-section-curved">
                                  <div class="theme-search-area-section-inner">
                                    <i class="theme-search-area-section-icon lin lin-location-pin"></i>
                                    <input class="theme-search-area-section-input typeahead" type="text" placeholder="Apartment Location" data-provide="typeahead"/>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-7 ">
                                <div class="row" data-gutter="none">
                                  <div class="col-md-4 ">
                                    <div class="theme-search-area-section theme-search-area-section-fade-white theme-search-area-section-no-border theme-search-area-section-mr theme-search-area-section-sm theme-search-area-section-curved">
                                      <div class="theme-search-area-section-inner">
                                        <i class="theme-search-area-section-icon lin lin-calendar"></i>
                                        <input class="theme-search-area-section-input datePickerStart _mob-h" value="Wed 06/27" type="text" placeholder="Check-in"/>
                                        <input class="theme-search-area-section-input _desk-h mobile-picker" value="2018-06-27" type="date"/>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-4 ">
                                    <div class="theme-search-area-section theme-search-area-section-fade-white theme-search-area-section-no-border theme-search-area-section-mr theme-search-area-section-sm theme-search-area-section-curved">
                                      <div class="theme-search-area-section-inner">
                                        <i class="theme-search-area-section-icon lin lin-calendar"></i>
                                        <input class="theme-search-area-section-input datePickerEnd _mob-h" value="Mon 07/02" type="text" placeholder="Check-out"/>
                                        <input class="theme-search-area-section-input _desk-h mobile-picker" value="2018-07-02" type="date"/>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-4 ">
                                    <div class="theme-search-area-section theme-search-area-section-fade-white theme-search-area-section-no-border theme-search-area-section-mr theme-search-area-section-sm theme-search-area-section-curved quantity-selector" data-increment="Guests">
                                      <div class="theme-search-area-section-inner">
                                        <i class="theme-search-area-section-icon lin lin-people"></i>
                                        <input class="theme-search-area-section-input" value="2 Guests" type="text"/>
                                        <div class="quantity-selector-box" id="RoomSearchGuests">
                                          <div class="quantity-selector-inner">
                                            <p class="quantity-selector-title">Guests</p>
                                            <ul class="quantity-selector-controls">
                                              <li class="quantity-selector-decrement">
                                                <a href="#">&#45;</a>
                                              </li>
                                              <li class="quantity-selector-current">1</li>
                                              <li class="quantity-selector-increment">
                                                <a href="#">&#43;</a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-1 ">
                                <button class="theme-search-area-submit _mt-0 theme-search-area-submit-no-border theme-search-area-submit-white theme-search-area-submit-sm theme-search-area-submit-curved">Search</button>
                              </div>
                            </div>
                          </div>
                          <div class="theme-search-area-options _mob-h theme-search-area-options-center theme-search-area-options-dot-white clearfix">
                            <div class="btn-group theme-search-area-options-list" data-toggle="buttons">
                              <label class="btn btn-primary active">
                                <input type="radio" name="room-options" id="room-option-1" checked/>Any
                              </label>
                              <label class="btn btn-primary">
                                <input type="radio" name="room-options" id="room-option-2"/>Entire Home
                              </label>
                              <label class="btn btn-primary">
                                <input type="radio" name="room-options" id="room-option-3"/>Private Room
                              </label>
                              <label class="btn btn-primary">
                                <input type="radio" name="room-options" id="room-option-4"/>Shared Space
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane" id="SearchAreaTabs-3" role="tab-panel">
                        <div class="theme-search-area theme-search-area-stacked theme-search-area-white">
                          <div class="theme-search-area-form">
                            <div class="row" data-gutter="none">
                              <div class="col-md-5 ">
                                <div class="row" data-gutter="none">
                                  <div class="col-md-6 ">
                                    <div class="theme-search-area-section first theme-search-area-section-fade-white theme-search-area-section-no-border theme-search-area-section-mr theme-search-area-section-sm theme-search-area-section-curved">
                                      <div class="theme-search-area-section-inner">
                                        <i class="theme-search-area-section-icon lin lin-location-pin"></i>
                                        <input class="theme-search-area-section-input typeahead" type="text" placeholder="Departure" data-provide="typeahead"/>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-6 ">
                                    <div class="theme-search-area-section theme-search-area-section-fade-white theme-search-area-section-no-border theme-search-area-section-mr theme-search-area-section-sm theme-search-area-section-curved">
                                      <div class="theme-search-area-section-inner">
                                        <i class="theme-search-area-section-icon lin lin-location-pin"></i>
                                        <input class="theme-search-area-section-input typeahead" type="text" placeholder="Arrival" data-provide="typeahead"/>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-6 ">
                                <div class="row" data-gutter="none">
                                  <div class="col-md-4 ">
                                    <div class="theme-search-area-section theme-search-area-section-fade-white theme-search-area-section-no-border theme-search-area-section-mr theme-search-area-section-sm theme-search-area-section-curved">
                                      <div class="theme-search-area-section-inner">
                                        <i class="theme-search-area-section-icon lin lin-calendar"></i>
                                        <input class="theme-search-area-section-input datePickerStart _mob-h" value="Wed 06/27" type="text" placeholder="Check-in"/>
                                        <input class="theme-search-area-section-input _desk-h mobile-picker" value="2018-06-27" type="date"/>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-4 ">
                                    <div class="theme-search-area-section theme-search-area-section-fade-white theme-search-area-section-no-border theme-search-area-section-mr theme-search-area-section-sm theme-search-area-section-curved">
                                      <div class="theme-search-area-section-inner">
                                        <i class="theme-search-area-section-icon lin lin-calendar"></i>
                                        <input class="theme-search-area-section-input datePickerEnd _mob-h" value="Mon 07/02" type="text" placeholder="Check-out"/>
                                        <input class="theme-search-area-section-input _desk-h mobile-picker" value="2018-07-02" type="date"/>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-4 ">
                                    <div class="theme-search-area-section theme-search-area-section-fade-white theme-search-area-section-no-border theme-search-area-section-mr theme-search-area-section-sm theme-search-area-section-curved quantity-selector" data-increment="Passengers">
                                      <div class="theme-search-area-section-inner">
                                        <i class="theme-search-area-section-icon lin lin-people"></i>
                                        <input class="theme-search-area-section-input" value="1 Passenger" type="text"/>
                                        <div class="quantity-selector-box" id="FlySearchPassengers">
                                          <div class="quantity-selector-inner">
                                            <p class="quantity-selector-title">Passengers</p>
                                            <ul class="quantity-selector-controls">
                                              <li class="quantity-selector-decrement">
                                                <a href="#">&#45;</a>
                                              </li>
                                              <li class="quantity-selector-current">1</li>
                                              <li class="quantity-selector-increment">
                                                <a href="#">&#43;</a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-1 ">
                                <button class="theme-search-area-submit _mt-0 theme-search-area-submit-no-border theme-search-area-submit-white theme-search-area-submit-sm theme-search-area-submit-curved">Search</button>
                              </div>
                            </div>
                          </div>
                          <div class="theme-search-area-options theme-search-area-options-center theme-search-area-options-dot-white clearfix">
                            <div class="btn-group theme-search-area-options-list" data-toggle="buttons">
                              <label class="btn btn-primary active">
                                <input type="radio" name="flight-options" id="flight-option-1" checked/>Round Trip
                              </label>
                              <label class="btn btn-primary">
                                <input type="radio" name="flight-options" id="flight-option-2"/>One Way
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane" id="SearchAreaTabs-4" role="tab-panel">
                        <div class="theme-search-area theme-search-area-stacked theme-search-area-white">
                          <div class="theme-search-area-form">
                            <div class="row" data-gutter="none">
                              <div class="col-md-7 ">
                                <div class="row" data-gutter="none">
                                  <div class="col-md-6 ">
                                    <div class="theme-search-area-section first theme-search-area-section-fade-white theme-search-area-section-no-border theme-search-area-section-mr theme-search-area-section-sm theme-search-area-section-curved">
                                      <div class="theme-search-area-section-inner">
                                        <i class="theme-search-area-section-icon lin lin-location-pin"></i>
                                        <input class="theme-search-area-section-input typeahead" type="text" placeholder="Pick up location" data-provide="typeahead"/>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-6 ">
                                    <div class="theme-search-area-section theme-search-area-section-fade-white theme-search-area-section-no-border theme-search-area-section-mr theme-search-area-section-sm theme-search-area-section-curved">
                                      <div class="theme-search-area-section-inner">
                                        <i class="theme-search-area-section-icon lin lin-location-pin"></i>
                                        <input class="theme-search-area-section-input typeahead" type="text" placeholder="Drop off location" data-provide="typeahead"/>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-2 ">
                                <div class="theme-search-area-section theme-search-area-section-fade-white theme-search-area-section-no-border theme-search-area-section-mr theme-search-area-section-sm theme-search-area-section-curved">
                                  <div class="theme-search-area-section-inner">
                                    <i class="theme-search-area-section-icon lin lin-calendar"></i>
                                    <input class="theme-search-area-section-input datePickerStart _mob-h" value="Wed 06/27" type="text" placeholder="Check-in"/>
                                    <input class="theme-search-area-section-input _desk-h mobile-picker" value="2018-06-27" type="date"/>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-2 ">
                                <div class="theme-search-area-section theme-search-area-section-fade-white theme-search-area-section-no-border theme-search-area-section-mr theme-search-area-section-sm theme-search-area-section-curved">
                                  <div class="theme-search-area-section-inner">
                                    <i class="theme-search-area-section-icon lin lin-calendar"></i>
                                    <input class="theme-search-area-section-input datePickerEnd _mob-h" value="Mon 07/02" type="text" placeholder="Check-out"/>
                                    <input class="theme-search-area-section-input _desk-h mobile-picker" value="2018-07-02" type="date"/>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-1 ">
                                <button class="theme-search-area-submit _mt-0 theme-search-area-submit-no-border theme-search-area-submit-white theme-search-area-submit-sm theme-search-area-submit-curved">Search</button>
                              </div>
                            </div>
                          </div>
                          <div class="theme-search-area-options _mob-h theme-search-area-options-center theme-search-area-options-dot-white clearfix">
                            <div class="btn-group theme-search-area-options-list" data-toggle="buttons">
                              <label class="btn btn-primary active">
                                <input type="radio" name="car-options" id="car-option-1" checked/>Any
                              </label>
                              <label class="btn btn-primary">
                                <input type="radio" name="car-options" id="car-option-2"/>Sedan
                              </label>
                              <label class="btn btn-primary">
                                <input type="radio" name="car-options" id="car-option-3"/>Hatchback
                              </label>
                              <label class="btn btn-primary">
                                <input type="radio" name="car-options" id="car-option-4"/>SUV
                              </label>
                              <label class="btn btn-primary">
                                <input type="radio" name="car-options" id="car-option-5"/>Crossover
                              </label>
                              <label class="btn btn-primary">
                                <input type="radio" name="car-options" id="car-option-6"/>Coupe
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane" id="SearchAreaTabs-5" role="tab-panel">
                        <div class="theme-search-area theme-search-area-stacked theme-search-area-white">
                          <div class="theme-search-area-form">
                            <div class="row" data-gutter="none">
                              <div class="col-md-4 ">
                                <div class="theme-search-area-section first theme-search-area-section-fade-white theme-search-area-section-no-border theme-search-area-section-mr theme-search-area-section-sm theme-search-area-section-curved">
                                  <div class="theme-search-area-section-inner">
                                    <i class="theme-search-area-section-icon lin lin-location-pin"></i>
                                    <input class="theme-search-area-section-input typeahead" type="text" placeholder="Destination" data-provide="typeahead"/>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-7 ">
                                <div class="row" data-gutter="none">
                                  <div class="col-md-4 ">
                                    <div class="theme-search-area-section theme-search-area-section-fade-white theme-search-area-section-no-border theme-search-area-section-mr theme-search-area-section-sm theme-search-area-section-curved">
                                      <div class="theme-search-area-section-inner">
                                        <i class="theme-search-area-section-icon lin lin-calendar"></i>
                                        <input class="theme-search-area-section-input datePickerStart _mob-h" value="Wed 06/27" type="text" placeholder="Check-in"/>
                                        <input class="theme-search-area-section-input _desk-h mobile-picker" value="2018-06-27" type="date"/>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-4 ">
                                    <div class="theme-search-area-section theme-search-area-section-fade-white theme-search-area-section-no-border theme-search-area-section-mr theme-search-area-section-sm theme-search-area-section-curved">
                                      <div class="theme-search-area-section-inner">
                                        <i class="theme-search-area-section-icon lin lin-calendar"></i>
                                        <input class="theme-search-area-section-input datePickerEnd _mob-h" value="Mon 07/02" type="text" placeholder="Check-out"/>
                                        <input class="theme-search-area-section-input _desk-h mobile-picker" value="2018-07-02" type="date"/>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-4 ">
                                    <div class="theme-search-area-section theme-search-area-section-fade-white theme-search-area-section-no-border theme-search-area-section-mr theme-search-area-section-sm theme-search-area-section-curved quantity-selector" data-increment="Guests">
                                      <div class="theme-search-area-section-inner">
                                        <i class="theme-search-area-section-icon lin lin-people"></i>
                                        <input class="theme-search-area-section-input" value="2 Guests" type="text"/>
                                        <div class="quantity-selector-box" id="ExpSearchGuests">
                                          <div class="quantity-selector-inner">
                                            <p class="quantity-selector-title">Guests</p>
                                            <ul class="quantity-selector-controls">
                                              <li class="quantity-selector-decrement">
                                                <a href="#">&#45;</a>
                                              </li>
                                              <li class="quantity-selector-current">1</li>
                                              <li class="quantity-selector-increment">
                                                <a href="#">&#43;</a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-1 ">
                                <button class="theme-search-area-submit _mt-0 theme-search-area-submit-no-border theme-search-area-submit-white theme-search-area-submit-sm theme-search-area-submit-curved">Search</button>
                              </div>
                            </div>
                          </div>
                          <div class="theme-search-area-options _mob-h theme-search-area-options-center theme-search-area-options-dot-white clearfix">
                            <div class="btn-group theme-search-area-options-list" data-toggle="buttons">
                              <label class="btn btn-primary active">
                                <input type="radio" name="exp-options" id="exp-option-1" checked/>Any
                              </label>
                              <label class="btn btn-primary">
                                <input type="radio" name="exp-options" id="exp-option-2"/>Experiences
                              </label>
                              <label class="btn btn-primary">
                                <input type="radio" name="exp-options" id="exp-option-3"/>Immersions
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    

  
</template>

<script>
export default {

}
</script>

<style scoped>

._h-100vh {
    height: 95vh !important;
}

.theme-hero-area-grad-mask {
    background: -webkit-linear-gradient(
135deg
, #00587e, #0093d2);
    background: -moz-linear-gradient(135deg, #00587e, #0093d2);
    background: -o-linear-gradient(135deg, #00587e, #0093d2);
    background: -ms-linear-gradient(135deg, #00587e, #0093d2);
    background: linear-gradient(
-45deg
, #00587e, #0093d2);
    z-index: 3;
}

</style>