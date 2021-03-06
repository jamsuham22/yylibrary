Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
      resources :users, only: [:create, :show]
      resource :session, only: [:create, :destroy]
          resources :books, only: [:update, :create, :destroy, :show, :index]

    end
  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
