import { Vector3 } from '@dcl/sdk/math'
import { AssetLoad, AudioSource, engine, InputAction, MeshCollider, MeshRenderer, PointerEvents, pointerEventsSystem, Transform } from '@dcl/sdk/ecs'
import { setupUi } from './ui'


export function main() {

// MARK: WooHoo
	const woohoo = engine.addEntity()

	// preload the audio file
	//  -- COMMENT THIS OUT TO MAKE IT WORK ON MOBILE
	AssetLoad.create(woohoo, {
		assets: ["assets/woo.wav"]
	})
	//-- COMMENT THIS OUT TO MAKE IT WORK ON MOBILE
	// END

	
	// create the audio source
	AudioSource.create(woohoo, {
		audioClipUrl: "assets/woo.wav",
		global      : true,
		volume      : 1,
		loop        : false
	})


	// Show a thing
	Transform.create(woohoo, { position: Vector3.create(4, 1, 4) })
	MeshRenderer.setBox(woohoo)
	MeshCollider.setBox(woohoo)


	// Add pointer trigger
	pointerEventsSystem.onPointerDown({
		entity: woohoo,
		opts  : {
			button     : InputAction.IA_POINTER,
			hoverText  : "WooHoo! (AssetLoad = true)",
			maxDistance: 20
		}
	}, () => {
		AudioSource.playSound(woohoo, 'assets/woo.wav')
	})


// MARK: Tada
	const tada = engine.addEntity()
	
	// create the audio source
	AudioSource.create(tada, {
		audioClipUrl: "assets/tada.wav",
		global      : true,
		volume      : 1,
		loop        : false
	})

	// Show a thing
	Transform.create(tada, { position: Vector3.create(8, 1, 4) })
	MeshRenderer.setBox(tada)
	MeshCollider.setBox(tada)


	// Add pointer trigger
	pointerEventsSystem.onPointerDown({
		entity: tada,
		opts  : {
			button     : InputAction.IA_POINTER,
			hoverText  : "Tada! (AssetLoad = false)",
			maxDistance: 20
		}
	}, () => {
		AudioSource.playSound(tada, 'assets/tada.wav')
	})
}

